package com.posdevice.restapi.domain;

import static org.assertj.core.api.Assertions.assertThat;

import com.posdevice.restapi.web.rest.TestUtil;
import org.junit.jupiter.api.Test;

class DeviceOrderTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(DeviceOrder.class);
        DeviceOrder deviceOrder1 = new DeviceOrder();
        deviceOrder1.setId(1L);
        DeviceOrder deviceOrder2 = new DeviceOrder();
        deviceOrder2.setId(deviceOrder1.getId());
        assertThat(deviceOrder1).isEqualTo(deviceOrder2);
        deviceOrder2.setId(2L);
        assertThat(deviceOrder1).isNotEqualTo(deviceOrder2);
        deviceOrder1.setId(null);
        assertThat(deviceOrder1).isNotEqualTo(deviceOrder2);
    }
}
