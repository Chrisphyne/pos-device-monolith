package com.posdevice.restapi.domain;

import javax.annotation.Generated;
import javax.persistence.metamodel.SetAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(DeviceModel.class)
public abstract class DeviceModel_ {

	public static volatile SetAttribute<DeviceModel, Device> devices;
	public static volatile SingularAttribute<DeviceModel, String> name;
	public static volatile SingularAttribute<DeviceModel, String> description;
	public static volatile SingularAttribute<DeviceModel, Long> id;

	public static final String DEVICES = "devices";
	public static final String NAME = "name";
	public static final String DESCRIPTION = "description";
	public static final String ID = "id";

}

