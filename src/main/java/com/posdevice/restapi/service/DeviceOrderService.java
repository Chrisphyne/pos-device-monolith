package com.posdevice.restapi.service;

import com.posdevice.restapi.domain.DeviceOrder;
import com.posdevice.restapi.repository.DeviceOrderRepository;
import java.util.List;
import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Service Implementation for managing {@link DeviceOrder}.
 */
@Service
@Transactional
public class DeviceOrderService {

    private final Logger log = LoggerFactory.getLogger(DeviceOrderService.class);

    private final DeviceOrderRepository deviceOrderRepository;

    public DeviceOrderService(DeviceOrderRepository deviceOrderRepository) {
        this.deviceOrderRepository = deviceOrderRepository;
    }

    /**
     * Save a deviceOrder.
     *
     * @param deviceOrder the entity to save.
     * @return the persisted entity.
     */
    public DeviceOrder save(DeviceOrder deviceOrder) {
        log.debug("Request to save DeviceOrder : {}", deviceOrder);
        return deviceOrderRepository.save(deviceOrder);
    }

    /**
     * Partially update a deviceOrder.
     *
     * @param deviceOrder the entity to update partially.
     * @return the persisted entity.
     */
    public Optional<DeviceOrder> partialUpdate(DeviceOrder deviceOrder) {
        log.debug("Request to partially update DeviceOrder : {}", deviceOrder);

        return deviceOrderRepository
            .findById(deviceOrder.getId())
            .map(
                existingDeviceOrder -> {
                    if (deviceOrder.getQuantity() != null) {
                        existingDeviceOrder.setQuantity(deviceOrder.getQuantity());
                    }
                    if (deviceOrder.getTotalPrice() != null) {
                        existingDeviceOrder.setTotalPrice(deviceOrder.getTotalPrice());
                    }

                    return existingDeviceOrder;
                }
            )
            .map(deviceOrderRepository::save);
    }

    /**
     * Get all the deviceOrders.
     *
     * @return the list of entities.
     */
    @Transactional(readOnly = true)
    public List<DeviceOrder> findAll() {
        log.debug("Request to get all DeviceOrders");
        return deviceOrderRepository.findAll();
    }

    /**
     * Get one deviceOrder by id.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    @Transactional(readOnly = true)
    public Optional<DeviceOrder> findOne(Long id) {
        log.debug("Request to get DeviceOrder : {}", id);
        return deviceOrderRepository.findById(id);
    }

    /**
     * Delete the deviceOrder by id.
     *
     * @param id the id of the entity.
     */
    public void delete(Long id) {
        log.debug("Request to delete DeviceOrder : {}", id);
        deviceOrderRepository.deleteById(id);
    }
}
