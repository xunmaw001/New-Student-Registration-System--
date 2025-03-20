package com.dao;

import com.entity.ShizililiangEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.entity.vo.ShizililiangVO;
import com.entity.view.ShizililiangView;


/**
 * 师资力量
 * 
 * @author 
 * @email 
 * @date 2022-03-05 08:18:47
 */
public interface ShizililiangDao extends BaseMapper<ShizililiangEntity> {
	
	List<ShizililiangVO> selectListVO(@Param("ew") Wrapper<ShizililiangEntity> wrapper);
	
	ShizililiangVO selectVO(@Param("ew") Wrapper<ShizililiangEntity> wrapper);
	
	List<ShizililiangView> selectListView(@Param("ew") Wrapper<ShizililiangEntity> wrapper);

	List<ShizililiangView> selectListView(Pagination page,@Param("ew") Wrapper<ShizililiangEntity> wrapper);
	
	ShizililiangView selectView(@Param("ew") Wrapper<ShizililiangEntity> wrapper);
	

}
