package com.posdevice.restapi.web.rest;

import com.posdevice.restapi.domain.DeviceOrder;
import com.posdevice.restapi.repository.DeviceOrderRepository;
import com.posdevice.restapi.service.DeviceOrderService;
import com.posdevice.restapi.web.rest.errors.BadRequestAlertException;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tech.jhipster.web.util.HeaderUtil;
import tech.jhipster.web.util.ResponseUtil;

/**
 * REST controller for managing {@link com.posdevice.restapi.domain.DeviceOrder}.
 */
@RestController
@RequestMapping("/api")
public class DeviceOrderResource {

    private final Logger log = LoggerFactory.getLogger(DeviceOrderResource.class);

    private static final String ENTITY_NAME = "deviceOrder";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final DeviceOrderService deviceOrderService;

    private final DeviceOrderRepository deviceOrderRepository;

    public DeviceOrderResource(DeviceOrderService deviceOrderService, DeviceOrderRepository deviceOrderRepository) {
        this.deviceOrderService = deviceOrderService;
        this.deviceOrderRepository = deviceOrderRepository;
    }

    /**
     * {@code POST  /device-orders} : Create a new deviceOrder.
     *
     * @param deviceOrder the deviceOrder to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new deviceOrder, or with status {@code 400 (Bad Request)} if the deviceOrder has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/device-orders")
    public ResponseEntity<DeviceOrder> createDeviceOrder(@Valid @RequestBody DeviceOrder deviceOrder) throws URISyntaxException {
        log.debug("REST request to save DeviceOrder : {}", deviceOrder);
        if (deviceOrder.getId() != null) {
            throw new BadRequestAlertException("A new deviceOrder cannot already have an ID", ENTITY_NAME, "idexists");
        }
        DeviceOrder result = deviceOrderService.save(deviceOrder);
        return ResponseEntity
            .created(new URI("/api/device-orders/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /device-orders/:id} : Updates an existing deviceOrder.
     *
     * @param id the id of the deviceOrder to save.
     * @param deviceOrder the deviceOrder to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated deviceOrder,
     * or with status {@code 400 (Bad Request)} if the deviceOrder is not valid,
     * or with status {@code 500 (Internal Server Error)} if the deviceOrder couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/device-orders/{id}")
    public ResponseEntity<DeviceOrder> updateDeviceOrder(
        @PathVariable(value = "id", required = false) final Long id,
        @Valid @RequestBody DeviceOrder deviceOrder
    ) throws URISyntaxException {
        log.debug("REST request to update DeviceOrder : {}, {}", id, deviceOrder);
        if (deviceOrder.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, deviceOrder.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        if (!deviceOrderRepository.existsById(id)) {
            throw new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound");
        }

        DeviceOrder result = deviceOrderService.save(deviceOrder);
        return ResponseEntity
            .ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, deviceOrder.getId().toString()))
            .body(result);
    }

    /**
     * {@code PATCH  /device-orders/:id} : Partial updates given fields of an existing deviceOrder, field will ignore if it is null
     *
     * @param id the id of the deviceOrder to save.
     * @param deviceOrder the deviceOrder to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated deviceOrder,
     * or with status {@code 400 (Bad Request)} if the deviceOrder is not valid,
     * or with status {@code 404 (Not Found)} if the deviceOrder is not found,
     * or with status {@code 500 (Internal Server Error)} if the deviceOrder couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PatchMapping(value = "/device-orders/{id}", consumes = "application/merge-patch+json")
    public ResponseEntity<DeviceOrder> partialUpdateDeviceOrder(
        @PathVariable(value = "id", required = false) final Long id,
        @NotNull @RequestBody DeviceOrder deviceOrder
    ) throws URISyntaxException {
        log.debug("REST request to partial update DeviceOrder partially : {}, {}", id, deviceOrder);
        if (deviceOrder.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, deviceOrder.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        if (!deviceOrderRepository.existsById(id)) {
            throw new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound");
        }

        Optional<DeviceOrder> result = deviceOrderService.partialUpdate(deviceOrder);

        return ResponseUtil.wrapOrNotFound(
            result,
            HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, deviceOrder.getId().toString())
        );
    }

    /**
     * {@code GET  /device-orders} : get all the deviceOrders.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of deviceOrders in body.
     */
    @GetMapping("/device-orders")
    public List<DeviceOrder> getAllDeviceOrders() {
        log.debug("REST request to get all DeviceOrders");
        return deviceOrderService.findAll();
    }

    /**
     * {@code GET  /device-orders/:id} : get the "id" deviceOrder.
     *
     * @param id the id of the deviceOrder to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the deviceOrder, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/device-orders/{id}")
    public ResponseEntity<DeviceOrder> getDeviceOrder(@PathVariable Long id) {
        log.debug("REST request to get DeviceOrder : {}", id);
        Optional<DeviceOrder> deviceOrder = deviceOrderService.findOne(id);
        return ResponseUtil.wrapOrNotFound(deviceOrder);
    }

    /**
     * {@code DELETE  /device-orders/:id} : delete the "id" deviceOrder.
     *
     * @param id the id of the deviceOrder to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/device-orders/{id}")
    public ResponseEntity<Void> deleteDeviceOrder(@PathVariable Long id) {
        log.debug("REST request to delete DeviceOrder : {}", id);
        deviceOrderService.delete(id);
        return ResponseEntity
            .noContent()
            .headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString()))
            .build();
    }
}
