package com.posdevice.restapi.service;

import com.posdevice.restapi.domain.DeviceModel;
import com.posdevice.restapi.repository.DeviceModelRepository;
import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Service Implementation for managing {@link DeviceModel}.
 */
@Service
@Transactional
public class DeviceModelService {

    private final Logger log = LoggerFactory.getLogger(DeviceModelService.class);

    private final DeviceModelRepository deviceModelRepository;

    public DeviceModelService(DeviceModelRepository deviceModelRepository) {
        this.deviceModelRepository = deviceModelRepository;
    }

    /**
     * Save a deviceModel.
     *
     * @param deviceModel the entity to save.
     * @return the persisted entity.
     */
    public DeviceModel save(DeviceModel deviceModel) {
        log.debug("Request to save DeviceModel : {}", deviceModel);
        return deviceModelRepository.save(deviceModel);
    }

    /**
     * Partially update a deviceModel.
     *
     * @param deviceModel the entity to update partially.
     * @return the persisted entity.
     */
    public Optional<DeviceModel> partialUpdate(DeviceModel deviceModel) {
        log.debug("Request to partially update DeviceModel : {}", deviceModel);

        return deviceModelRepository
            .findById(deviceModel.getId())
            .map(
                existingDeviceModel -> {
                    if (deviceModel.getName() != null) {
                        existingDeviceModel.setName(deviceModel.getName());
                    }
                    if (deviceModel.getDescription() != null) {
                        existingDeviceModel.setDescription(deviceModel.getDescription());
                    }

                    return existingDeviceModel;
                }
            )
            .map(deviceModelRepository::save);
    }

    /**
     * Get all the deviceModels.
     *
     * @param pageable the pagination information.
     * @return the list of entities.
     */
    @Transactional(readOnly = true)
    public Page<DeviceModel> findAll(Pageable pageable) {
        log.debug("Request to get all DeviceModels");
        return deviceModelRepository.findAll(pageable);
    }

    /**
     * Get one deviceModel by id.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    @Transactional(readOnly = true)
    public Optional<DeviceModel> findOne(Long id) {
        log.debug("Request to get DeviceModel : {}", id);
        return deviceModelRepository.findById(id);
    }

    /**
     * Delete the deviceModel by id.
     *
     * @param id the id of the entity.
     */
    public void delete(Long id) {
        log.debug("Request to delete DeviceModel : {}", id);
        deviceModelRepository.deleteById(id);
    }
}
