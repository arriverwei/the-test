function ajax(url){
		var xhr=new XMLHttpRequest();
		xhr.open('GET',url,true);
		xhr.send();
		xhr.onreadystatechange=function(){
			if(xhr.status==200&&xhr.readyState==4){
				var json=xhr.responseText
	  			json=JSON.parse(json)
	  			var box=document.getElementsByClassName('box')[0]
	  			var ul=document.createElement('ul');
	  			ul.setAttribute('id','ul')
	  			for (var j=0;j<json.length;j++) {
	  				var span=document.createElement('span');
	  				span.setAttribute('class',('span_'+j));
	  				span.innerHTML=json[j].top;	  
	  				var h3=document.createElement('h3');
	  				h3.setAttribute('class',('h3_'+j));
	  				h3.innerHTML=json[j].title;
	  				var p=document.createElement('p');
	  				p.setAttribute('class',('p_'+j));
	  				p.innerHTML=json[j].introduce;
	  				var b=document.createElement('b');
	  				b.setAttribute('class',('b_'+j));
	  				b.innerHTML=json[j].showprice;
	  				var i=document.createElement('i');
	  				i.setAttribute('class',('i_'+j));
	  				i.innerHTML=json[j].markprice;
	  				var btn = document.createElement("button");
	  				btn.setAttribute("button",'button');
	  				btn.setAttribute("class",j)
	  				btn.innerHTML = "删除"
					var img=document.createElement('img');						
					var li=document.createElement('li');
					li.setAttribute('id',('li_'+j))	;				
					img.src=json[j].src;
					li.appendChild(span);
					li.appendChild(img);
					li.appendChild(h3);
					li.appendChild(p);
					li.appendChild(b);
					li.appendChild(i);
					li.appendChild(btn);
					ul.appendChild(li)
					box.appendChild(ul)
							
				} 
			}
		}
	}
	ajax('text1.json')
	var box = document.querySelector('.box');
	var ul_box = document.querySelector('.ul');
	var biaoji = document.querySelector('.biaoji');
	var allli = document.getElementsByTagName('li')
	var clr = document.getElementsByClassName('cleck_box')[0]; 
	var spandel=document.getElementsByClassName('delspan')[0];
	var err=document.getElementsByClassName('errb')[0]
     var he = box.onclick = function(ev){
      	ev = ev || window.event
      	ev.target = ev.target || ev.srcElement
      	if(ev.target.nodeName == "BUTTON"){
      		clr.style.display = 'block'
      		var num = ev.target.className
      		var _ev = ev 
      		clr.onclick = function(ev){
      	if(ev.target.nodeName == "SPAN"){
      		num  = Number(num)
      		console.log(allli)
            allli[num].remove();
      	}else if(ev.target.nodeName == "B"){
      		clr.style.display = 'none'
      		
      	}
     }	
      	}
      	 
     }
        spandel.onclick=function(){
        	clr.style.display='none'
        }
        errb.onclick=function(){
        	clr.style.display='none'
        }
     	clr.onclick = function(ev){
     		ev = ev || window.event
      	ev.target = ev.target || ev.srcElement
      	if(ev.target.nodeName == "SPAN"){
      	}
     }
	
	clr.onmousedown=function(ev){
		var ev=ev||window.event
		var offsetx=ev.offsetX;
		var offsety=ev.offsetY;
		document.onmousemove=function(ev){
			var ev=ev||window.event
			var x=ev.clientX-offsetx;
			var y=ev.clientY-offsety;
			var maxwidth=document.innerWidth-clr.offsetWidth;
			var maxheight=document.innerHeight-clr.offsetHeight;
			if(x<0){
				x=0;
			}else if(x>=maxwidth){
				x=maxwidth
			}if(y<0){
				y=0
			}else if(y>=maxheight){
				y=maxheight
			}
			clr.style.left=x-100+'px';
			clr.style.top=y-100+'px'
		}
	}
	clr.onmouseup=function(){
		document.onmousemove=null;
	}

