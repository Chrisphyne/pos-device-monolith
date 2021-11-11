package com.posdevice.restapi.domain;

import java.math.BigDecimal;
import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(DeviceOrder.class)
public abstract class DeviceOrder_ {

	public static volatile SingularAttribute<DeviceOrder, Integer> quantity;
	public static volatile SingularAttribute<DeviceOrder, BigDecimal> totalPrice;
	public static volatile SingularAttribute<DeviceOrder, Long> id;
	public static volatile SingularAttribute<DeviceOrder, Device> device;
	public static volatile SingularAttribute<DeviceOrder, ShoppingCart> cart;

	public static final String QUANTITY = "quantity";
	public static final String TOTAL_PRICE = "totalPrice";
	public static final String ID = "id";
	public static final String DEVICE = "device";
	public static final String CART = "cart";

}

