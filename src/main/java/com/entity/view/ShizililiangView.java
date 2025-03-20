package com.entity.view;

import com.entity.ShizililiangEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import org.apache.commons.beanutils.BeanUtils;
import java.lang.reflect.InvocationTargetException;

import java.io.Serializable;
 

/**
 * 师资力量
 * 后端返回视图实体辅助类   
 * （通常后端关联的表或者自定义的字段需要返回使用）
 * @author 
 * @email 
 * @date 2022-03-05 08:18:47
 */
@TableName("shizililiang")
public class ShizililiangView  extends ShizililiangEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	public ShizililiangView(){
	}
 
 	public ShizililiangView(ShizililiangEntity shizililiangEntity){
 	try {
			BeanUtils.copyProperties(this, shizililiangEntity);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
 		
	}
}
