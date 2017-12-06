var $box01 = $('.cent1'),
    $box02 = $('.cent2'),
    $box03 = $('.cent3'),
    $box04 = $('.cent4'),
    $box05 = $('.cent5'),
    $box06 = $('.cent6'),
    path = [{right:64, top:259}, {right:124, top:386}, {right:253, top:438}],
    path2 = [{top:405, left:218}, {top:355, left:301}, {top:299, left:339}],
    path3 = [{top:75, left:246}, {top:68, left:143}, {top:102, left:68}],
    path4 = [{top:152, left:-7}, {top:92, left:39}, {top:49, left:112}],
    path5 = [{x:0, y:0}, {x:125, y:-80}, {x:250, y:0}],
    path6 = [{x:0, y:0}, {x:125, y:-80}, {x:250, y:0}],
    tl = new TimelineMax({repeat: Infinity, yoyo: true});
    t2 = new TimelineMax({repeat: Infinity, yoyo: true});
    t3 = new TimelineMax({repeat: Infinity, yoyo: true});
    t4 = new TimelineMax({repeat: Infinity, yoyo: true});
tl.to($box01, 3, {delay:0.3, bezier:{values:path}, ease:Power1.easeInOut});
t2.to($box02, 3, {delay:0.4, bezier:{values:path2}, ease:Power1.easeInOut})
t3.to($box04, 3, {delay:0.2, bezier:{values:path3}, ease:Power1.easeInOut})
t4.to($box05, 3, {delay:0.5, bezier:{values:path4}, ease:Power1.easeInOut})
  /*.to($box05, 1, {bezier:{values:path5}, ease:Power1.easeInOut})
  .to($box06, 1, {bezier:{values:path6}, ease:Power1.easeInOut})*/;