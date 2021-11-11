package com.posdevice.restapi.repository;

import com.posdevice.restapi.domain.DeviceOrder;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data SQL repository for the DeviceOrder entity.
 */
@SuppressWarnings("unused")
@Repository
public interface DeviceOrderRepository extends JpaRepository<DeviceOrder, Long> {}
