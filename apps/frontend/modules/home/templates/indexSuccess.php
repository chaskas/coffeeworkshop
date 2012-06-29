<script type="text/javascript">
  $(window).load(function() {
    $('#slider').nivoSlider();
  });
</script>
<!-- start scrip colorbox --> 
<link rel="stylesheet" href="colorbox.css" />
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
<script src="../colorbox/jquery.colorbox.js"></script>
<script>
  $(document).ready(function(){
    //Examples of how to assign the ColorBox event to elements
    $(".group").colorbox({rel:'group', transition:"none", width:"85%", height:"85%"});
    $(".youtube").colorbox({iframe:true, innerWidth:425, innerHeight:344});
    
    //Example of preserving a JavaScript event for inline calls.
    $("#click").click(function(){ 
      $('#click').css({"background-color":"#f00", "color":"#fff", "cursor":"inherit"}).text("Open this window again and this message will still be here.");
      return false;
    });
  });
</script>
<!-- end scrip colorbox --> 

<!-- Start main content --> 
<span class="welcome" id="top"><!-- Anchor Link for Welcome Section --></span>
<!-- Start Header -->
<div id="header">
  <div class="inner">
    <div class="logo">
      <?php echo image_tag('logo.png','width=112,height=172,alt=Coffe & Workshop Logo'); ?>
    </div>
    <!-- End Logo --> 

    <!-- Main Navigation -->
    <div id="navigation">
      <ul class="main-menu">
        <li><span><a href="#top">Inicio</a></span></li>
        <li><span><a href="#participa">Participa</a></span></li>
        <!-- Class gap: For the gap between the logo and menu -->
        <li class="gap"><span><a href="#calendario">Calendario</a></span></li>
        <li><span><a href="#blog-link">Blog</a></span></li>
        <li><span><a href="#acerca-de">Acerca de</a></span></li>
        <li><span><a href="#contactanos">Contáctanos</a></span></li>
      </ul>
    </div>
    <!-- End Navigation --> 
  </div>
  <!-- End Header Inner Div --> 
</div>
<!-- End Header Div --> 

<!-- Start Welcome Section -->
<div id="welcome">
  <div class="inner">
    <?php echo image_tag('label.png','width=987,height=343,alt=Coffe & Workshop Logo'); ?>
    <div id="feature" class="clearfix">
      <div class="inner"> 
        <div class="slider-wrapper theme-default">
          <div class="ribbon"></div>
          <div id="slider" class="nivoSlider">
            <?php echo image_tag('slider/slide.png', 'width=969, height=150, alt=Happiness'); ?>
            <?php echo image_tag('slider/slide2.png', 'width=969, height=150, alt=Happiness'); ?>
            <?php echo image_tag('slider/slide3.png', 'width=969, height=150, alt=Happiness'); ?>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="splitter"><!-- Page Splitter --></div>

<!-- Start Method Box 4 -->
<div id="method">
  <div class="inner"> 
    <!-- Anchor Link for Method Section --> 
    <span class="method" id="participa">&nbsp;</span>
    <h1 class="dark">Participa!</h1>
    <h3 class="dark">¿Deseas ser expositor?</h3>
    <div class="workflow">
      <ul>
        <li>
          <?php echo image_tag('strategy.png','width=209,height=211,alt=Coffe & Workshop'); ?>
          <h2>Atrévete</h2>
          <p>Buscamos a jóvenes emprendedores con ganas de compartir, enseñar y generar redes. Esta es tu oportunidad para motivar a estudiantes a desarrollar ideas innovadoras y emprender juntos en nuevos y creativos proyectos. Completa el siguiente formulario y nos pondremos en contacto.</p>
        </li>
        <li class="last">
          <div class="expo-form" id="expoFormDiv">
            <?php include_component('home','addExpositor') ?>
          </div>
        </li>
      </ul>
    </div>
    <!-- End Workflow --> 

  </div>
  <!-- End Method Inner -->
</div>
<!-- End Method box 4 -->
<div class="splitter-up"><!-- Page Splitter --></div>

<!-- Start My Work -->
<div id="my-work"> 
  <!-- Anchor Link for My Work Section -->
  <div class="inner"> <span class="my-work" id="calendario">&nbsp;</span>
    <h1 class="light">Calendario</h1>
<!--    <p class="light"></p>-->
    <!-- Start Gallery -->
    <div class="gallery">
      <ul>
        <li>
          <div class="left">
          <div class="foto">
            <h3>Jueves 7 de Julio</h3>
          <span>
            <?php echo image_tag('afiche01.png','width=173,height=173'); ?>
          </span>
          </div>
          <div class="ponentes">
            <ul>
              <li>
                <h6>José Fuentes</h6>
                <?php echo image_tag('icons/mail.png'); ?>
                <?php echo image_tag('icons/facebook.png'); ?>
                <?php echo image_tag('icons/twitter.png'); ?>
              </li>
              <li>
                <h6>Erich Grüttner</h6>
                <?php echo image_tag('icons/mail.png'); ?>
                <?php echo image_tag('icons/facebook.png'); ?>
                <?php echo image_tag('icons/twitter.png'); ?>
              </li>
            </ul>
          </div>
            </div>
          <div class="info">
            <h2>Investigación o Emprendimiento</h2>
            <p>Coffee &amp; Workshop te invita a conocer dos experiencias que muchas veces se contraponen, y es necesario elegir entre una u otra, la investigación y el emprendimiento.</p>
            <p>El primer expositor será José Fuentes, alumno de Doctorado del Departamento, quién nos contará sobre su experiencia estudiando tanto en el magíster como en el doctorado de Ciencias de la Computación en la Universidad de Concepción, sus proyectos concretados y los fallidos, dificultades que se han presentando en el transcurso de sus estudios, y cuáles han sido los pro y sus contra en su decisión de dedicarse al área de investigación.</p>
            <p>Para la segunda parte del Workshop contaremos con la participación de Erich Grüttner, ex-alumno y ahora Ingeniero Civil Informático, quien actualmente trabaja como Jefe de Proyectos en la DTI de la UdeC y además en paralelo es director de la empresa Tutinova ( <a href="http://www.tutinova.com/">Tutinova</a> ), que se dedica al desarrollo de aplicaciones educativas para móviles, quien con su experiencia nos contará sobre a sus emprendimientos, como nació su idea, proceso de desarrollo y cuál es su estado actual.</p> 
           
            <!-- start colorbox --> 
            <a class="group" href="/content/ws1/IMG_2440.jpg" >Fotos</a>
            <a class="group" href="/content/ws1/IMG_2441.jpg" ></a>
            <a class="group" href="/content/ws1/IMG_2442.jpg" ></a>
            <a class="group" href="/content/ws1/IMG_2443.jpg" ></a>
            <a class="group" href="/content/ws1/IMG_2447.jpg" ></a>
            <a class="group" href="/content/ws1/IMG_2449.jpg" ></a>
            <a class="group" href="/content/ws1/IMG_2450.jpg" ></a>
            <a class="group" href="/content/ws1/IMG_2451.jpg" ></a>
            <a class="group" href="/content/ws1/IMG_2455.jpg" ></a>
            <a class="group" href="/content/ws1/1.jpg" ></a>
            <a class="group" href="/content/ws1/2.jpg" ></a>
            <a class="group" href="/content/ws1/3.jpg" ></a>
            <a class="group" href="/content/ws1/4.jpg" ></a>
            <a class="group" href="/content/ws1/5.jpg" ></a>
            <a class="group" href="/content/ws1/6.jpg" ></a>
            <a class="group" href="/content/ws1/7.jpg" ></a>
            <a class="group" href="/content/ws1/8.jpg" ></a>
            <a class="group" href="/content/ws1/9.jpg" ></a>
            <a class="group" href="/content/ws1/10.jpg" ></a>
            <a class='youtube' href="http://www.youtube.com/embed/M9j-bSEPI_0?rel=0&amp;wmode=transparent" title="Coffee &amp; Workshop 1, Parte 1">Video parte 1</a>
            <a class='youtube' href="http://www.youtube.com/embed/vK58NcT6Jfw?rel=0&amp;wmode=transparent" title="Coffee &amp; Workshop 1, Parte 2">Video parte 2</a>
          </div>
          <!-- This contains the hidden content for inline calls -->
          <div style='display:none'>
            <div id='inline_content' style='padding:10px; background:#fff;'>
            <p><strong>This content comes from a hidden element on this page.</strong></p>
            <p>The inline option preserves bound JavaScript events and changes, and it puts the content back where it came from when it is closed.</p>
            <p><a id="click" href="#" style='padding:5px; background:#ccc;'>Click me, it will be preserved!</a></p>
            
            <p><strong>If you try to open a new ColorBox while it is already open, it will update itself with the new content.</strong></p>
            <p>Updating Content Example:<br />
            <a class="ajax" href="../content/flash.html">Click here to load new content</a></p>
            </div>
            <!-- end colorbox --> 
            
          </div>
        </li>
      </ul>
    </div>
    <!-- End Gallery --> 

  </div>
  <!-- End My Work Inner --> 
</div>
<!-- End My Work -->

<div class="splitter"><!-- Page Splitter --></div>
<!-- Start Blog -->
<div id="blog">
  <div class="inner"> 
    <!-- Anchor Link for Blog Section --> 
    <span class="blog" id="blog-link">&nbsp;</span>
    <div class="inner clearfix">
      <div class="posts">
        <h1 class="dark">Blog</h1>
        <!-- Start Single Blog Post -->
        <div class="single-post clearfix"> 
          <a href="blog-post.html"> 
            <?php echo image_tag('ws1.jpg','width=235,height=203, alt=Primer CWs'); ?>
          </a>
          <h2>1º Coffee & Workshop</h2>
          <p class="post-info">Posted By <em>Staff Coffee & Workshop</em></p>
          <p class="date">18 Jun</p>
          <p> En el primer Coffee & Workshop contamos con la participación de José Fuentes y Erich Grüttner, a quienes agradecemos su entusiasmo y tiempo dedicado en las 2 charlas.</p>
          <p>Los videos los pueden ver la sección calendario, además de las fotos, todo gracias al Cainf y a Juan Escalona.</p>
        </div>
        <!-- Start Single Blog Post -->
        <div class="single-post clearfix"> <a href="blog-post.html"> 
            <?php echo image_tag('coffee.png','width=235,height=203, alt=Coffee'); ?>
          </a>
          <h2>Bienvenidos</h2>
          <p class="post-info">Posted By <em>Staff Coffee & Workshop</em></p>
          <p class="date">18 Jun</p>
          <p>Bienvenido a la página de Coffee & Workshop, un espacio para compartir conocimiento, innovar y emprender. En nuestro sitio encontrarás las próximas fechas en que se realizarán los eventos, como también el registro de los pasados.</p>
          <p>En este espacio podrás inscribirte como expositor, encontrar noticias relacionadas con innovación y emprendimiento, y por supuesto enviarnos tus consultas, críticas y/o comentarios.</p>
          <p>Esperamos que disfrutes del sitio.</p>
        </div>
        <!-- End single-post --> 

      </div>

      <!-- End posts -->

      <div class="sidebar">
        <div class="search">
          <h4>Search</h4>
          <!-- Blog Searchbar -->
          <form>
            <input type="text" name="search" onFocus="if(this.value == 'search') { this.value = ''; }" value="search" />
            <button type="button" class="btn-alt2">Go</button>
          </form>
        </div>
        <!-- End sidebar -->
        <div class="categories clearfix">
          <h4>Categories</h4>
          <ul>
            <li><span><a href="#">Articles</a></span></li>
            <li><span><a href="#">Case Studies</a></span></li>
            <li><span><a href="#">CSS</a></span></li>
            <li><span><a href="#">Projects</a></span></li>
            <li><span><a href="#">Designs</a></span></li>
            <li><span><a href="#">Development</a></span></li>
            <li><span><a href="#">News</a></span></li>
            <li><span><a href="#">UX</a></span></li>
            <li><span><a href="#">Application Design</a></span></li>
            <li><span><a href="#">Front-End Development</a></span></li>
            <li><span><a href="#">Rainbows</a></span></li>
          </ul>
        </div>
        <!-- End categories -->
        <div class="recent-news">
          <h4>Recent News</h4>
          <ul>
            <li><strong>+</strong><a href="#">News Article Name - <em>18.04.2012</em></a></li>
            <li><strong>+</strong><a href="#">News Article Name - <em>19.04.2012</em></a></li>
            <li><strong>+</strong><a href="#">News Article Name - <em>20.04.2012</em></a></li>
            <li><strong>+</strong><a href="#">News Article Name - <em>21.04.2012</em></a></li>
            <li><strong>+</strong><a href="#">News Article Name - <em>22.04.2012</em></a></li>
          </ul>
        </div>
        <!-- End recent-news --> 
      </div>
      <!-- End sidebar --> 
    </div>
    <!-- End inner --> 
  </div>
</div>
<!-- End Blog -->
<div class="splitter-up"><!-- Page Splitter --></div>

<!-- Start About Me Section -->
<div id="about-me">
  <div class="inner"> 
    <!-- Anchor Link for About me Section --> 
    <span class="about-me" id="acerca-de">&nbsp;</span>
    <h1 class="light">Coffee & Workshop</h1>
    <div class="intro">
      <?php echo image_tag('coffee-logo.png','width=81,height=110'); ?>
      <p>La idea de crear un Workshop nace principalmente de la necesidad de motivar a los alumnos del departamento de Ingeniería Civil Informática a desarrollar sus ideas y emprender en nuevos y creativos proyectos, además de crear instancias donde podamos participar y aprender de los conocimientos de alumnos y ex-alumnos en diversos temas relacionados con el manejo de información, hacking ético, videojuegos, seguridad informática, y en general cualquier tema que involucre emprendimiento, innovación y tecnología, como también de aprender sobre sus diversas experiencias en el emprendimiento e investigación.</p>
    </div>
    <!-- End Intro Div -->
    <h3>My Skills</h3>
    <div id="skills">
      <ul>
        <li class="html">HTML 5<span>95%</span></li>
        <li class="css">CSS 3 <span>85%</span></li>
        <li class="javascript">Javascript/JQuery <span>65%</span></li>
        <li class="php">PHP & MySql <span>75%</span></li>
        <li class="photoshop">Photoshop <span>95%</span></li>
        <li class="dreamweaver">Dreamweaver <span>85%</span></li>
        <li class="fireworks">Fireworks <span>60%</span></li>
        <li class="illustrator">Illustrator <span>90%</span></li>
      </ul>
    </div>
    <!-- End Skills -->
    <div class="infographic"> 
      <?php echo image_tag('infographic.png','width=275,height=275,alt=Infograph'); ?>
    </div>
    <div class="resume">
      <h2>View My<br />
        Online Resume</h2>
      <p><a href="resume.html" class="red-btn"><span>Resume</span></a></p>
      <h4>Why Yes!<br />
        I'm Accepting Freelance Work</h4>
    </div>
    <!-- End Resume --> 

  </div>
  <!-- End About me Inner --> 
</div>
<!-- End About me -->

<div class="splitter"><!-- Page Splitter --></div>
<!-- Start Contact me -->
<div id="contact" class="clearfix">
  <div class="inner"> 
    <!-- Anchor Link for Get in touch Section --> 
    <span class="contact" id="contactanos">&nbsp;</span>
    <h1 class="dark">Ponte en contacto con nosotros</h1>
    <h3 class="dark">I would Like to hear from you</h3>
    <div class="contact-form">
      <p>Use the form below to contact me for freelance work or feel free to just say Hi or comment on my portfolio.
      <form id="commentForm" method="post" action="http://www.kobusswartz.co.za/primento/check.php">
        <fieldset class="text-fields">
          <input type="text" name="name" id="cname" onFocus="if(this.value == 'Your name') { this.value = ''; }"  value="Your name" />
          <input type="text" name="url" id="curl" onFocus="if(this.value == 'Your website') { this.value = ''; }" value="Your website" />
          <input type="text" name="cemail" id="cemail" class="required email" onFocus="if(this.value == 'Your Email') { this.value = ''; }" value="Your Email" />
        </fieldset>
        <fieldset class="text-block">
          <textarea name="ccomment" class="required comment" onFocus="if(this.value == 'Type your message here') { this.value = ''; }">Type your message here</textarea>
        </fieldset>
        <input type="submit" name="submit" value="Send" class="red-btn" />
      </form>
    </div>
    <!-- End contact-form -->

    <div class="details">
      <h3 class="dark">Personal Contact Details</h3>
      <ul>
        <li><span>Email -</span> john-doe@example.com <span>Telephone -</span> +27741256528</li>
        <li><span>Address</span> - 123 Fake Street Name, Pretoria, South Africa</li>
      </ul>
      <div class="social">
        <h3 class="dark">Get Social</h3>
        <ul>
          <li><a href="#"><?php echo image_tag('facebook.png','width=70,height=70,alt=Facebook'); ?></a></li>
          <li><a href="#"><?php echo image_tag('twitter.png','width=70,height=70,alt=Twitter'); ?></a></li>
          <li><a href="#"><?php echo image_tag('pinterest.png','width=70,height=70,alt=Pinterest'); ?></a></li>
          <li><a href="#"><?php echo image_tag('vimeo.png','width=70,height=70,alt=Vimeo'); ?></a></li>
          <li><a href="#"><?php echo image_tag('skype.png','width=70,height=70,alt=Skype'); ?></a></li>
        </ul>
      </div>
      <!-- End social --> 
    </div>
    <!-- End details --> 
    <!-- Start Google Map -->
    <div class="map">
      <iframe scrolling="no" frameborder="0" src="https://maps.google.cl/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Edmundo+Larenas+215,+Concepci%C3%B3n&amp;aq=0&amp;oq=Edmundo+Larenas+215&amp;sll=-25.780149,28.291638&amp;sspn=0.013719,0.022724&amp;ie=UTF8&amp;hq=&amp;hnear=Edmundo+Larenas+215,+Concepci%C3%B3n,+Provincia+Concepci%C3%B3n,+Biob%C3%ADo&amp;t=m&amp;z=14&amp;ll=-36.83019,-73.037356&amp;output=embed"></iframe>
    </div>
    <!-- End map -->
    <div class="go-up"> <span><a href="#top">
          <?php echo image_tag('going-up.png','width=110,height=110,alt=Going up ?'); ?>
        </a></span> </div>
    <!-- End go-up --> 
  </div>
  <!-- End inner --> 
</div>
<!-- End contact -->
<div class="splitter-up"></div>
<!-- Start Footer -->
<div id="footer" class="clearfix">
  <div class="inner">
    <div class="footer-logo"><a href="#">
        <?php echo image_tag('footer-logo.png','width=200,height=75,alt=Footer'); ?>
      </a> </div>
    <!-- End footer-logo -->

    <div class="footer-links">
      <p><strong>Primento</strong> - Premium HTML Theme 2012<br />
        Available Exclusively in <a href="#">Theme Forest</a></p>
    </div>
    <!-- End footer-links -->

    <div class="rss"> <a href="#">
        <p>Stay up to date <br />
          and subscribe</p>
      </a> </div>
    <!-- End rss --> 

  </div>
  <!-- End inner --> 
</div>
<!-- End Footer Div -->