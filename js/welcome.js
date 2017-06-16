// 页面加载完毕后执行
$(document).ready(function() {
	// 定义第二屏的特效计时器
	var timer1=null; 
	var timer2=null; 
	var visited=false;
	//定义第四屏slide2~4的鼠标事件的变量
	var appearIndex2=0;
	var appearIndex3=0;
	//定义第四屏slide2~4的访问变量
	var visited2=false,
		visited3=false,
		visited4=false;
	// 引入fullpage
	$('#fullpage').fullpage({
		// 基本配置项
		anchors:["page1","page2","page3","page4","page5"],
		verticalCentered:false,
		navigation:true,
		controlArrows: false,
		slidesNavigation:true,
		// 页面载入完成，使page1的小三角形icon进行跳跃
		afterRender:function(){
			setInterval(function(){
				move(".section1 .section1-icon .section1-icon2").set("margin-top","30px").end(function(){
					move(".section1 .section1-icon .section1-icon2").set("margin-top","20px").end();
				});
			},1000);
		},
		// 检测滚动到某一section，触发相应事件
		afterLoad:function(link,index){
			switch(index){
				case 1:
					move(".section1 h1").scale(5).end();
					move(".section1 p").set("margin-top","100px").end();
				break;
				case 2:
					if(visited){
						timer1=setTimeout(function(){
							$(".section2-item:odd").css("top","0");
							$(".section2-item:even").css("bottom","0");
						} ,500);
					}
					else{
						timerSec2 = setTimeout(function(){
						$(".section2 h1").fadeIn(800,function(){
							$(".section2 h1").fadeOut(800,function(){
								$(".section2 .section2-open").fadeIn(1500,function(){
									$(".section2 .section2-open").fadeOut(1000,function(){
										$(".section2-item:odd").css("top","0");
										$(".section2-item:even").css("bottom","0");
										});
									});
								});
							});
						},500);
					}
				break;
				case 3:
					move(".section3 .show").set("left","0%").end();
					move(".section3 .title").set("right","10%").end();
					move(".section3 .section3-menu").set("right","22%").end();
					move(".section3 .section3-info").set("left","82%").end();
				break;
				case 4:
					move(".section4 .slide1 .show00").rotate(0).end();
					move(".section4 .slide1 .show01").rotate(10).end();
					move(".section4 .slide1 .show02").rotate(-10).end();
					move(".section4 .slide1 .show03").rotate(10).end();
				break;
				case 5:
					move(".section5 .contact-text").set("margin-left","0px").end();
					move(".section5 .contact  img").set("margin-right","0px").end();
				break;
				default:
				break;
			}
		},
		// 检测离开某一section，触发相应事件
		onLeave:function(index,nextIndex,direction){
			switch(index){
				case 1:
					move(".section1 h1").scale(1).end();
					move(".section1 p").set("margin-top","800px").end();
				break;
				case 2:
					clearTimeout(timer1);
					clearTimeout(timer2);
					visited=true;
					$(".section2 h1").css("display","block");
					$(".section2 p").css("display","block");
					$(".section2-item:odd").css("top","500%");
					$(".section2-item:even").css("bottom","500%");
				break;
				case 3:
					move(".section3 .show").set("left","-100%").end();
					move(".section3 .title").set("right","-100%").end();
					move(".section3 .section3-menu").set("right","-100%").end();
					move(".section3 .section3-info").set("left","-100%").end();
				break;
				case 4:
					move(".section4 .slide1 .show00").rotate(45).end();
					move(".section4 .slide1 .show01").rotate(45).end();
					move(".section4 .slide1 .show02").rotate(45).end();
					move(".section4 .slide1 .show03").rotate(45).end();
				break;
				case 5:
					move(".section5 .contact-text").set("margin-left","-300px").end();
					move(".section5 .contact  img").set("margin-right","-300px").end();
				break;
				default:
				break;
			}
		},
		// section4中幻灯片左右切换时，触发响应事件
		afterSlideLoad:function(anchorLink,index,slideAnchor,slideIndex){
			switch(slideIndex){
				case 0:
					
				break;
				case 1:
					move(".section4 .slidetext-container").set("top","10%").set("left","10%").set("width","230px").set("height","300px").end(function(){
						$(".section4 .slidetext-container .slide2-text").fadeIn(function(){
							if(!visited2){
								$(".section4 .slide2 .slide2-imgs .group1").fadeIn();
							}
						});
					});
					appearIndex2=0;
				break;
				case 2:
					move(".section4 .slidetext-container").set("top","50%").set("left","170%").set("width","150px").set("height","220px").end(function(){
						$(".section4 .slidetext-container .slide3-text").fadeIn(function(){
							if(!visited3){
								$(".section4 .slide3 .slide3-imgs .group1").fadeIn();
							}
						});
					});
					appearIndex3=0;
				break;
				case 3:
					move(".section4 .slidetext-container").set("top","10%").set("left","270%").set("width","150px").set("height","200px").end(function(){
						$(".section4 .slidetext-container .slide4-text").fadeIn(function(){
							if(!visited4){
								$(".section4 .slide4 .slide4-imgs .group1").fadeIn();
							}
						});
					});
					appearIndex4=0;
				break;
				default:
				break;
			}
		},
		// section4中离开某幻灯片时，触发响应事件
		onSlideLeave:function(anchorLink,index,slideIndex,direction,nextSlideIndex){
			switch(slideIndex){
				case 0:
					
				break;
				case 1:
					var slideText2=$(".section4 .slidetext-container .slide2-text");
					slidetextChange(slideText2);					
					visited2=true;
				break;
				case 2:
					var slideText3=$(".section4 .slidetext-container .slide3-text");
					slidetextChange(slideText3);					
					visited3=true;
				break;
				case 3:
					var slideText4=$(".section4 .slidetext-container .slide4-text");
					slidetextChange(slideText4);
					visited4=true;
				break;
				default:
				break;
			}
		}
	});
	// 以下为section2的鼠标事件
	var items=$(".section2-items div");
	items.mouseenter(function(){
		var that=$(this);
		that.addClass("selected").siblings().removeClass("selected");
		that.find(".section2-itemtext").fadeIn();
		that.find("p").fadeIn();
		that.find("h2").fadeOut();
		that.siblings().find(".section2-itemtext").fadeOut();
		that.siblings().find("h2").fadeIn();
	});


	// 以下为section3的鼠标事件
	var menus=$(".section3 .section3-menu .menu-item");
	var infos=$(".section3 .section3-info div");
	var timer3=null;
	menus.mouseenter(function(){
		var menuThis=$(this);
		timer3=setTimeout(function(){
			menus.eq(menuThis.index()/2).addClass("selected").siblings().removeClass("selected");
			infos.eq(menuThis.index()/2).addClass("selected").siblings().removeClass("selected");
			$(".section3 .show-img").css("marginLeft",((-800)*(menuThis.index()/2))+"px");
		},300);
	});
	menus.mouseout(clearTimeout(timer3));


	// 以下为section4 slide1的鼠标事件
	var shows=$(".section4 .show");
	var infos4=$(".section4 .show00 .info p");
	shows.mouseenter(function(){
		$(this).addClass("active").siblings().removeClass("active");
		infos4.eq($(this).index()).css("display","block").siblings().css("display","none");
	});


	// 以下为section4 slide2——4 中公用白色内容区域的运动函数
	function slidetextChange(slideText){
		slideText.fadeOut(function(){
			move(".section4 .slidetext-container").set("width","0px").set("height","0px").end();
		});
	};

	// 以下为section4 slide2——4的鼠标事件的函数
	function imgMouse(pClick,appearGroup,appearImg,appearIndex){
		appearIndex=0;
		pClick.click(function(){
			appearIndex++;
			if (appearIndex>appearGroup.length-1){appearIndex=0;}
			console.log(appearIndex);
			appearGroup.eq(appearIndex).fadeIn().siblings().fadeOut();
		});
		appearImg.mouseenter(function(){
			var thisImg=$(this);
			thisImg.addClass("active").siblings().removeClass("active");
		});
	}
	imgMouse(($(".slidetext-container .slide2-p")),($(".slide2-imgs div")),($(".section4 .slide2 .slide2-imgs img")),appearIndex2);
	imgMouse(($(".slidetext-container .slide3-p")),($(".slide3-imgs div")),($(".section4 .slide3 .slide3-imgs img")),appearIndex3);
	imgMouse(($(".slidetext-container .slide4-p")),($(".slide4-imgs div")),($(".section4 .slide4 .slide4-imgs img")),appearIndex3);

	// 以下为section5的鼠标事件
	$(".section5 .contact img").click(function(){
		$(".section5 .contact-info .info").slideToggle();
	});
});

	

