package com.posdevice.restapi.domain;

import com.posdevice.restapi.domain.enumeration.Size;
import java.math.BigDecimal;
import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Device.class)
public abstract class Device_ {

	public static volatile SingularAttribute<Device, byte[]> image;
	public static volatile SingularAttribute<Device, BigDecimal> price;
	public static volatile SingularAttribute<Device, String> imageContentType;
	public static volatile SingularAttribute<Device, String> name;
	public static volatile SingularAttribute<Device, Size> deviceSize;
	public static volatile SingularAttribute<Device, String> description;
	public static volatile SingularAttribute<Device, DeviceModel> deviceModel;
	public static volatile SingularAttribute<Device, Long> id;

	public static final String IMAGE = "image";
	public static final String PRICE = "price";
	public static final String IMAGE_CONTENT_TYPE = "imageContentType";
	public static final String NAME = "name";
	public static final String DEVICE_SIZE = "deviceSize";
	public static final String DESCRIPTION = "description";
	public static final String DEVICE_MODEL = "deviceModel";
	public static final String ID = "id";

}

