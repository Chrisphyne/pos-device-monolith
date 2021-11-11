package com.posdevice.restapi.web.rest;

import static com.posdevice.restapi.web.rest.TestUtil.sameNumber;
import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import com.posdevice.restapi.IntegrationTest;
import com.posdevice.restapi.domain.Device;
import com.posdevice.restapi.domain.DeviceOrder;
import com.posdevice.restapi.domain.ShoppingCart;
import com.posdevice.restapi.repository.DeviceOrderRepository;
import java.math.BigDecimal;
import java.util.List;
import java.util.Random;
import java.util.concurrent.atomic.AtomicLong;
import javax.persistence.EntityManager;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.transaction.annotation.Transactional;

/**
 * Integration tests for the {@link DeviceOrderResource} REST controller.
 */
@IntegrationTest
@AutoConfigureMockMvc
@WithMockUser
class DeviceOrderResourceIT {

    private static final Integer DEFAULT_QUANTITY = 0;
    private static final Integer UPDATED_QUANTITY = 1;

    private static final BigDecimal DEFAULT_TOTAL_PRICE = new BigDecimal(0);
    private static final BigDecimal UPDATED_TOTAL_PRICE = new BigDecimal(1);

    private static final String ENTITY_API_URL = "/api/device-orders";
    private static final String ENTITY_API_URL_ID = ENTITY_API_URL + "/{id}";

    private static Random random = new Random();
    private static AtomicLong count = new AtomicLong(random.nextInt() + (2 * Integer.MAX_VALUE));

    @Autowired
    private DeviceOrderRepository deviceOrderRepository;

    @Autowired
    private EntityManager em;

    @Autowired
    private MockMvc restDeviceOrderMockMvc;

    private DeviceOrder deviceOrder;

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static DeviceOrder createEntity(EntityManager em) {
        DeviceOrder deviceOrder = new DeviceOrder().quantity(DEFAULT_QUANTITY).totalPrice(DEFAULT_TOTAL_PRICE);
        // Add required entity
        Device device;
        if (TestUtil.findAll(em, Device.class).isEmpty()) {
            device = DeviceResourceIT.createEntity(em);
            em.persist(device);
            em.flush();
        } else {
            device = TestUtil.findAll(em, Device.class).get(0);
        }
        deviceOrder.setDevice(device);
        // Add required entity
        ShoppingCart shoppingCart;
        if (TestUtil.findAll(em, ShoppingCart.class).isEmpty()) {
            shoppingCart = ShoppingCartResourceIT.createEntity(em);
            em.persist(shoppingCart);
            em.flush();
        } else {
            shoppingCart = TestUtil.findAll(em, ShoppingCart.class).get(0);
        }
        deviceOrder.setCart(shoppingCart);
        return deviceOrder;
    }

    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static DeviceOrder createUpdatedEntity(EntityManager em) {
        DeviceOrder deviceOrder = new DeviceOrder().quantity(UPDATED_QUANTITY).totalPrice(UPDATED_TOTAL_PRICE);
        // Add required entity
        Device device;
        if (TestUtil.findAll(em, Device.class).isEmpty()) {
            device = DeviceResourceIT.createUpdatedEntity(em);
            em.persist(device);
            em.flush();
        } else {
            device = TestUtil.findAll(em, Device.class).get(0);
        }
        deviceOrder.setDevice(device);
        // Add required entity
        ShoppingCart shoppingCart;
        if (TestUtil.findAll(em, ShoppingCart.class).isEmpty()) {
            shoppingCart = ShoppingCartResourceIT.createUpdatedEntity(em);
            em.persist(shoppingCart);
            em.flush();
        } else {
            shoppingCart = TestUtil.findAll(em, ShoppingCart.class).get(0);
        }
        deviceOrder.setCart(shoppingCart);
        return deviceOrder;
    }

    @BeforeEach
    public void initTest() {
        deviceOrder = createEntity(em);
    }

    @Test
    @Transactional
    void createDeviceOrder() throws Exception {
        int databaseSizeBeforeCreate = deviceOrderRepository.findAll().size();
        // Create the DeviceOrder
        restDeviceOrderMockMvc
            .perform(post(ENTITY_API_URL).contentType(MediaType.APPLICATION_JSON).content(TestUtil.convertObjectToJsonBytes(deviceOrder)))
            .andExpect(status().isCreated());

        // Validate the DeviceOrder in the database
        List<DeviceOrder> deviceOrderList = deviceOrderRepository.findAll();
        assertThat(deviceOrderList).hasSize(databaseSizeBeforeCreate + 1);
        DeviceOrder testDeviceOrder = deviceOrderList.get(deviceOrderList.size() - 1);
        assertThat(testDeviceOrder.getQuantity()).isEqualTo(DEFAULT_QUANTITY);
        assertThat(testDeviceOrder.getTotalPrice()).isEqualByComparingTo(DEFAULT_TOTAL_PRICE);
    }

    @Test
    @Transactional
    void createDeviceOrderWithExistingId() throws Exception {
        // Create the DeviceOrder with an existing ID
        deviceOrder.setId(1L);

        int databaseSizeBeforeCreate = deviceOrderRepository.findAll().size();

        // An entity with an existing ID cannot be created, so this API call must fail
        restDeviceOrderMockMvc
            .perform(post(ENTITY_API_URL).contentType(MediaType.APPLICATION_JSON).content(TestUtil.convertObjectToJsonBytes(deviceOrder)))
            .andExpect(status().isBadRequest());

        // Validate the DeviceOrder in the database
        List<DeviceOrder> deviceOrderList = deviceOrderRepository.findAll();
        assertThat(deviceOrderList).hasSize(databaseSizeBeforeCreate);
    }

    @Test
    @Transactional
    void checkQuantityIsRequired() throws Exception {
        int databaseSizeBeforeTest = deviceOrderRepository.findAll().size();
        // set the field null
        deviceOrder.setQuantity(null);

        // Create the DeviceOrder, which fails.

        restDeviceOrderMockMvc
            .perform(post(ENTITY_API_URL).contentType(MediaType.APPLICATION_JSON).content(TestUtil.convertObjectToJsonBytes(deviceOrder)))
            .andExpect(status().isBadRequest());

        List<DeviceOrder> deviceOrderList = deviceOrderRepository.findAll();
        assertThat(deviceOrderList).hasSize(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    void checkTotalPriceIsRequired() throws Exception {
        int databaseSizeBeforeTest = deviceOrderRepository.findAll().size();
        // set the field null
        deviceOrder.setTotalPrice(null);

        // Create the DeviceOrder, which fails.

        restDeviceOrderMockMvc
            .perform(post(ENTITY_API_URL).contentType(MediaType.APPLICATION_JSON).content(TestUtil.convertObjectToJsonBytes(deviceOrder)))
            .andExpect(status().isBadRequest());

        List<DeviceOrder> deviceOrderList = deviceOrderRepository.findAll();
        assertThat(deviceOrderList).hasSize(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    void getAllDeviceOrders() throws Exception {
        // Initialize the database
        deviceOrderRepository.saveAndFlush(deviceOrder);

        // Get all the deviceOrderList
        restDeviceOrderMockMvc
            .perform(get(ENTITY_API_URL + "?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(deviceOrder.getId().intValue())))
            .andExpect(jsonPath("$.[*].quantity").value(hasItem(DEFAULT_QUANTITY)))
            .andExpect(jsonPath("$.[*].totalPrice").value(hasItem(sameNumber(DEFAULT_TOTAL_PRICE))));
    }

    @Test
    @Transactional
    void getDeviceOrder() throws Exception {
        // Initialize the database
        deviceOrderRepository.saveAndFlush(deviceOrder);

        // Get the deviceOrder
        restDeviceOrderMockMvc
            .perform(get(ENTITY_API_URL_ID, deviceOrder.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.id").value(deviceOrder.getId().intValue()))
            .andExpect(jsonPath("$.quantity").value(DEFAULT_QUANTITY))
            .andExpect(jsonPath("$.totalPrice").value(sameNumber(DEFAULT_TOTAL_PRICE)));
    }

    @Test
    @Transactional
    void getNonExistingDeviceOrder() throws Exception {
        // Get the deviceOrder
        restDeviceOrderMockMvc.perform(get(ENTITY_API_URL_ID, Long.MAX_VALUE)).andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    void putNewDeviceOrder() throws Exception {
        // Initialize the database
        deviceOrderRepository.saveAndFlush(deviceOrder);

        int databaseSizeBeforeUpdate = deviceOrderRepository.findAll().size();

        // Update the deviceOrder
        DeviceOrder updatedDeviceOrder = deviceOrderRepository.findById(deviceOrder.getId()).get();
        // Disconnect from session so that the updates on updatedDeviceOrder are not directly saved in db
        em.detach(updatedDeviceOrder);
        updatedDeviceOrder.quantity(UPDATED_QUANTITY).totalPrice(UPDATED_TOTAL_PRICE);

        restDeviceOrderMockMvc
            .perform(
                put(ENTITY_API_URL_ID, updatedDeviceOrder.getId())
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(TestUtil.convertObjectToJsonBytes(updatedDeviceOrder))
            )
            .andExpect(status().isOk());

        // Validate the DeviceOrder in the database
        List<DeviceOrder> deviceOrderList = deviceOrderRepository.findAll();
        assertThat(deviceOrderList).hasSize(databaseSizeBeforeUpdate);
        DeviceOrder testDeviceOrder = deviceOrderList.get(deviceOrderList.size() - 1);
        assertThat(testDeviceOrder.getQuantity()).isEqualTo(UPDATED_QUANTITY);
        assertThat(testDeviceOrder.getTotalPrice()).isEqualTo(UPDATED_TOTAL_PRICE);
    }

    @Test
    @Transactional
    void putNonExistingDeviceOrder() throws Exception {
        int databaseSizeBeforeUpdate = deviceOrderRepository.findAll().size();
        deviceOrder.setId(count.incrementAndGet());

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restDeviceOrderMockMvc
            .perform(
                put(ENTITY_API_URL_ID, deviceOrder.getId())
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(TestUtil.convertObjectToJsonBytes(deviceOrder))
            )
            .andExpect(status().isBadRequest());

        // Validate the DeviceOrder in the database
        List<DeviceOrder> deviceOrderList = deviceOrderRepository.findAll();
        assertThat(deviceOrderList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void putWithIdMismatchDeviceOrder() throws Exception {
        int databaseSizeBeforeUpdate = deviceOrderRepository.findAll().size();
        deviceOrder.setId(count.incrementAndGet());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restDeviceOrderMockMvc
            .perform(
                put(ENTITY_API_URL_ID, count.incrementAndGet())
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(TestUtil.convertObjectToJsonBytes(deviceOrder))
            )
            .andExpect(status().isBadRequest());

        // Validate the DeviceOrder in the database
        List<DeviceOrder> deviceOrderList = deviceOrderRepository.findAll();
        assertThat(deviceOrderList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void putWithMissingIdPathParamDeviceOrder() throws Exception {
        int databaseSizeBeforeUpdate = deviceOrderRepository.findAll().size();
        deviceOrder.setId(count.incrementAndGet());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restDeviceOrderMockMvc
            .perform(put(ENTITY_API_URL).contentType(MediaType.APPLICATION_JSON).content(TestUtil.convertObjectToJsonBytes(deviceOrder)))
            .andExpect(status().isMethodNotAllowed());

        // Validate the DeviceOrder in the database
        List<DeviceOrder> deviceOrderList = deviceOrderRepository.findAll();
        assertThat(deviceOrderList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void partialUpdateDeviceOrderWithPatch() throws Exception {
        // Initialize the database
        deviceOrderRepository.saveAndFlush(deviceOrder);

        int databaseSizeBeforeUpdate = deviceOrderRepository.findAll().size();

        // Update the deviceOrder using partial update
        DeviceOrder partialUpdatedDeviceOrder = new DeviceOrder();
        partialUpdatedDeviceOrder.setId(deviceOrder.getId());

        restDeviceOrderMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, partialUpdatedDeviceOrder.getId())
                    .contentType("application/merge-patch+json")
                    .content(TestUtil.convertObjectToJsonBytes(partialUpdatedDeviceOrder))
            )
            .andExpect(status().isOk());

        // Validate the DeviceOrder in the database
        List<DeviceOrder> deviceOrderList = deviceOrderRepository.findAll();
        assertThat(deviceOrderList).hasSize(databaseSizeBeforeUpdate);
        DeviceOrder testDeviceOrder = deviceOrderList.get(deviceOrderList.size() - 1);
        assertThat(testDeviceOrder.getQuantity()).isEqualTo(DEFAULT_QUANTITY);
        assertThat(testDeviceOrder.getTotalPrice()).isEqualByComparingTo(DEFAULT_TOTAL_PRICE);
    }

    @Test
    @Transactional
    void fullUpdateDeviceOrderWithPatch() throws Exception {
        // Initialize the database
        deviceOrderRepository.saveAndFlush(deviceOrder);

        int databaseSizeBeforeUpdate = deviceOrderRepository.findAll().size();

        // Update the deviceOrder using partial update
        DeviceOrder partialUpdatedDeviceOrder = new DeviceOrder();
        partialUpdatedDeviceOrder.setId(deviceOrder.getId());

        partialUpdatedDeviceOrder.quantity(UPDATED_QUANTITY).totalPrice(UPDATED_TOTAL_PRICE);

        restDeviceOrderMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, partialUpdatedDeviceOrder.getId())
                    .contentType("application/merge-patch+json")
                    .content(TestUtil.convertObjectToJsonBytes(partialUpdatedDeviceOrder))
            )
            .andExpect(status().isOk());

        // Validate the DeviceOrder in the database
        List<DeviceOrder> deviceOrderList = deviceOrderRepository.findAll();
        assertThat(deviceOrderList).hasSize(databaseSizeBeforeUpdate);
        DeviceOrder testDeviceOrder = deviceOrderList.get(deviceOrderList.size() - 1);
        assertThat(testDeviceOrder.getQuantity()).isEqualTo(UPDATED_QUANTITY);
        assertThat(testDeviceOrder.getTotalPrice()).isEqualByComparingTo(UPDATED_TOTAL_PRICE);
    }

    @Test
    @Transactional
    void patchNonExistingDeviceOrder() throws Exception {
        int databaseSizeBeforeUpdate = deviceOrderRepository.findAll().size();
        deviceOrder.setId(count.incrementAndGet());

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restDeviceOrderMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, deviceOrder.getId())
                    .contentType("application/merge-patch+json")
                    .content(TestUtil.convertObjectToJsonBytes(deviceOrder))
            )
            .andExpect(status().isBadRequest());

        // Validate the DeviceOrder in the database
        List<DeviceOrder> deviceOrderList = deviceOrderRepository.findAll();
        assertThat(deviceOrderList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void patchWithIdMismatchDeviceOrder() throws Exception {
        int databaseSizeBeforeUpdate = deviceOrderRepository.findAll().size();
        deviceOrder.setId(count.incrementAndGet());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restDeviceOrderMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, count.incrementAndGet())
                    .contentType("application/merge-patch+json")
                    .content(TestUtil.convertObjectToJsonBytes(deviceOrder))
            )
            .andExpect(status().isBadRequest());

        // Validate the DeviceOrder in the database
        List<DeviceOrder> deviceOrderList = deviceOrderRepository.findAll();
        assertThat(deviceOrderList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void patchWithMissingIdPathParamDeviceOrder() throws Exception {
        int databaseSizeBeforeUpdate = deviceOrderRepository.findAll().size();
        deviceOrder.setId(count.incrementAndGet());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restDeviceOrderMockMvc
            .perform(
                patch(ENTITY_API_URL).contentType("application/merge-patch+json").content(TestUtil.convertObjectToJsonBytes(deviceOrder))
            )
            .andExpect(status().isMethodNotAllowed());

        // Validate the DeviceOrder in the database
        List<DeviceOrder> deviceOrderList = deviceOrderRepository.findAll();
        assertThat(deviceOrderList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void deleteDeviceOrder() throws Exception {
        // Initialize the database
        deviceOrderRepository.saveAndFlush(deviceOrder);

        int databaseSizeBeforeDelete = deviceOrderRepository.findAll().size();

        // Delete the deviceOrder
        restDeviceOrderMockMvc
            .perform(delete(ENTITY_API_URL_ID, deviceOrder.getId()).accept(MediaType.APPLICATION_JSON))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        List<DeviceOrder> deviceOrderList = deviceOrderRepository.findAll();
        assertThat(deviceOrderList).hasSize(databaseSizeBeforeDelete - 1);
    }
}
