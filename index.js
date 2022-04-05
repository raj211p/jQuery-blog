var hd=".heading";
$('document').ready(function(){

 $('.heading').css('text-align','center');
 $('body').css({'padding':'300px','padding-top':'10px','background-color':'#000','font':'sans-serif','margin':'0 auto'});
 $('.maindiv').css({'padding-left':'20px','padding-right':'5px'});
 $(hd).css('color','white');
 $('h3').css({'font-family':'Verdana','color':'white'});
 $('.arrow').css({'width':'20px','height':'15px','padding-right':'10px'});
 $('p').css({'font-family':'Verdana','color':'white'});
 $('ul').css({'font-family':'Verdana','color':'white'});
 $('.facttext').css('display','none'); 
 $('.fact').css({'padding':'10px','background-color':'blue','border-radius':'7px'});
 $('.content').css('display','none');

 $('.fact').click(function (e){
  var factbox=$(this).parents(".expandableandcollapsiblediv").find(".facttext");
  if(factbox.css("display")=="block")
   { factbox.css("display","none"); }
  else if(factbox.css("display")=="none")
   { factbox.css("display","block"); }
  });

 $('.arrow').css({'cursor':'pointer','float':'left'});
 $('.arrow').click(function (e){
   var eleDesc=$(this).parents(".expandableandcollapsiblediv").find(".content");
   if($(eleDesc).is(":visible")){
      eleDesc.hide("slow","swing");
      $(this).attr("src","assets/up.png");
   } else {
      eleDesc.show("slow","swing");
      $(this).attr("src","assets/down.png");
   }
 }); 

 $('#divInfoBox').hover(function(){
   var ibox=$('#divInfoBox');
   $('.desc').show(400,function(){
    $(this).html("The GNU General Public License (GNU GPL or simply GPL) is a series of widely used free software licenses that guarantee end users the 'four freedoms'- to run, study, share, and modify software. The license was the first 'copyleft' license for general use and was originally written by the founder of the Free Software Foundation (FSF), Richard Stallman, for the GNU Project.");
  });
   ibox.show(); 
   }, function(){
   var ibox=$('#divInfoBox');
   $('.desc',ibox).html("");
   });

  $('#kdpic').css({'width':'400px','height':'252px'});
  $('#kdpic').hover(function(){  
    $(this).parents('.expandableandcollapsiblediv').append('<p style="color:white;font-family:Verdana" id="pt"#>Ken Thompson (sitting) and Dennis Ritchie working together on a PDP-11.</p>');
   }, function(){
   var ptext=$(this).parents(".expandableandcollapsiblediv").find("#pt");
   $(ptext).remove();
   });

  var OSdesc=["Debian is one of the oldest operating systems based on the Linux kernel. The first version of Debian (0.01) was released in 1993. The project is coordinated over the Internet by a team of volunteers guided by the Debian Project Leader and three foundational documents: the Debian Social Contract, the Debian Constitution, and the Debian Free Software Guidelines. Various processor types are supported to one extent or another, including 32 and 64 bit x86, ARM, MIPS, PowerPC and IBM S/390. Current versions use the well-known APT package manager.","Ubuntu is developed by British company Canonical and a community of other developers. It is based on Debian and composed mostly of free and open-source software. Three editions exist: desktop, server, and core (for IoT devices and robots). Ubuntu is a popular operating system for cloud computing, with support for OpenStack. It has the highest market share among all Linux distributions owing to its ease of use.","Kali Linux is a Debian-based distribution designed for digital forensics and penetration testing. It is maintained and funded by Offensive Security. It ships with programs like Armitage, Nmap, Wireshark, Metasploit, Aircrack-ng, Burp suite, among others.","Red Hat Enterprise Linux is one of the most widespread RPM-based distros and is mainly used by enterprise customers. It is the successor to 'Red Hat Linux', which was discontinued in 2003. Red Hat Inc. provides professional quality assurance and subscription-based customer support as a part of their business model.","Fedora is a community-maintained OS sponsored by Red Hat and has a strong focus on open source components; it ships with the Linux-libre kernel as a kernel replacement. It is RPM-based and some features get adopted by RHEL downstream.","OpenSUSE is a community-driven Linux project. It comes in 2 flavours: OpenSUSE Leap, a user-friendly distro that has a release cycle of 8 months and a focus on stability and Tumbleweed, which receives regular rolling updates and targets developers and advanced users.","Arch Linux is a Linux distribution that attempts to have minimal distribution-specific changes, and therefore minimal breakage with updates, and be pragmatic and focus on customizability rather than user-friendliness. Pacman, a package manager written specifically for Arch, is used for package management. Arch Linux uses a rolling release model like OpenSUSE.","Manjaro is a Linux distribution based on Arch Linux. Manjaro has a focus on user-friendliness and accessibility; like Arch, it features a rolling release update model and uses Pacman for package management.","Gentoo Linux was named after the Gentoo penguin, the fastest swimming species of penguin. The name was chosen to reflect the potential speed improvements of machine-specific optimization, which is a major feature of Gentoo. The source code is compiled locally according to the user's preferences.","Slackware is a highly customizable distribution that stresses ease of maintenance and reliability over cutting-edge software and automated tools. It is generally considered a distribution for advanced users.","SuperGamer is a live DVD-based distro that was derived from Slackware. Its focus is gaming, similar to SteamOS (a gaming-oriented distro released by Valve)."];
   $('#currentImg').html(OSdesc[0]);

   $('.jcarousel').jcarousel();
 
        $('.jcarousel-control-prev')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'
            });
 
        $('.jcarousel-control-next')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '+=1'
            });
 
        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .jcarouselPagination();
         
        $('.jcarousel').jcarouselAutoscroll({
            autostart: false,
            target: '+=1'
        });  

      $('.jcarousel').on('jcarousel:visiblein','li',function(event,carousel){
	itemCount=$('.jcarousel li').length;
	currindex=($('li').index($(this)));
	$('#currentImg').html(OSdesc[currindex-7]);      
      });
});