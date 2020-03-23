$(document).ready(function(){
	//局部刷新
$('#addPage').load("C:/Users/1540664154/Documents/HBuilderProjects/ChildAnswer/section_page/page_index.html",function(){
	$('#queation_list').css("display","block");
	$('#flower_1').css("display","none");
	$('#flower_2').css("display","none");
	$('#flower_3').css("display","none");
});
});
//首页
$('#page_index').click(function(){
	 $('#addPage').load("C:/Users/1540664154/Documents/HBuilderProjects/ChildAnswer/section_page/page_index.html",function(){
	 	$('#queation_list').css("display","block");
	 	$('#flower_1').css("display","none");
		$('#flower_2').css("display","none");
		$('#flower_3').css("display","none");
	 });
});

//关注页
$('#page_follow').click(function(){
	 $('#addPage').load("section_page/page_follow.html",function(){
	 	$('#queation_list').css("display","block");
	 	$('#flower_1').css("display","none");
		$('#flower_2').css("display","none");
		$('#flower_3').css("display","none");
	 });
});

//主题页
$('#page_topic').click(function(){
	 $('#addPage').load("section_page/page_topic.html",function(){
	 	$('#queation_list').css("display","block");
	 	$('#flower_1').css("display","none");
		$('#flower_2').css("display","none");
		$('#flower_3').css("display","none");
	 });
});

//我要解答页
$('#page_answer').click(function(){
	 $('#addPage').load("section_page/page_answer.html",function(){
	 	$('#queation_list').css("display","block");
	 	$('#flower_1').css("display","none");
		$('#flower_2').css("display","none");
		$('#flower_3').css("display","none");
	 });
});

//菜单栏鼠标事件
$(".top_tab li").click(function(){
	$(this).addClass("active");
    $(this).siblings().removeClass("active");
});
$(".top_tab li").on("mouseover",function(){
  	$(this).addClass("active_h");
  	$(this).siblings().removeClass("active_h");
            
});
$(".top_tab li").on("mouseout",function(){
	$(this).removeClass("active_h");
});

//疑问
$("#myProblem").on("mouseover",function(){
  	$(this).addClass("active_right");
});
$("#myProblem").on("mouseout",function(){
	$(this).removeClass("active_right");
});
$('#myProblem').click(function(){
	$('#addPage').load("section_page/page_myProblem.html",function(){
		$('#queation_list').css("display","none");
		$('#flower_1').css("display","block");
		$('#flower_2').css("display","none");
		$('#flower_3').css("display","none");
		$('.top_tab li').siblings().removeClass("active_h");
		$('.top_tab li').siblings().removeClass("active");
	});
});

//被理解
$("#myRealize").on("mouseover",function(){
  	$(this).addClass("active_right");
});
$("#myRealize").on("mouseout",function(){
	$(this).removeClass("active_right");
});
$('#myRealize').click(function(){ 
	$('#addPage').load("section_page/page_realize.html",function(){
		$('#queation_list').css("display","none");
		$('#flower_1').css("display","none");
		$('#flower_2').css("display","block");
		$('#flower_3').css("display","none");
		$('.top_tab li').siblings().removeClass("active_h");
		$('.top_tab li').siblings().removeClass("active");
	});
});

//笔记
$("#myNote").on("mouseover",function(){
  	$(this).addClass("active_right");
});
$("#myNote").on("mouseout",function(){
	$(this).removeClass("active_right");
});
$('#myNote').click(function(){ 
	$('#addPage').load("section_page/page_note.html",function(){
		$('#queation_list').css("display","none");
		$('#flower_1').css("display","none");
		$('#flower_2').css("display","none");
		$('#flower_3').css("display","block");
		$('.top_tab li').siblings().removeClass("active_h");
		$('.top_tab li').siblings().removeClass("active");
	});
});

//好问课堂
$("#myClass").on("mouseover",function(){
  	$(this).addClass("active_right");
});
$("#myClass").on("mouseout",function(){
	$(this).removeClass("active_right");
});

//专栏
$("#myColumn").on("mouseover",function(){
  	$(this).addClass("active_right");
});
$("#myColumn").on("mouseout",function(){
	$(this).removeClass("active_right");
});

//友谊树
$("#myTree").on("mouseover",function(){
  	$(this).addClass("active_right");
});
$("#myTree").on("mouseout",function(){
	$(this).removeClass("active_right");
});
$('#myTree').click(function(){ 
	$('#addPage').load("section_page/page_tree.html",function(){
		$('#queation_list').css("display","none");
		$('#flower_1').css("display","none");
		$('#flower_2').css("display","none");
		$('#flower_3').css("display","none");
		$('.top_tab li').siblings().removeClass("active_h");
		$('.top_tab li').siblings().removeClass("active");
	});
});

