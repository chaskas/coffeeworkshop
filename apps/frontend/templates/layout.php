<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
  <head>
    <?php include_http_metas() ?>
    <?php include_metas() ?>
    <?php include_title() ?>
    <?php include_stylesheets() ?>
    <?php include_javascripts() ?>
  </head>
  <body>
    <div id="logo">
      <?php echo image_tag('logo.png', 'width=263,height=140,class=logo'); ?>
    </div>
    <div id="wrapper">
      <div id="main">
        <ul>
          <li><a href="#home">Home</a></li>

          <li><a href="#about">About</a></li>

          <li><a href="#work">Projects</a></li>

          <li><a href="#services">Services</a></li>

          <li><a href="#portfolio">Portfolio</a></li>

          <li><a  href="#contact">Contact</a></li>

          <li><a href="#blog">Blog</a></li>

          <li class="last"><a href="#extras">extras</a></li>
        </ul>
      </div>
      <div style="clear: both; margin-botton: 20px;">&nbsp;</div>
      <div id="content">
        <?php echo $sf_content; ?>
      </div>
      <div style="clear: both; margin-top: 20px;">&nbsp;</div>
      <div class="footer">
        <div class="footer_inner">
          <ul>
            <li><a href="#home" class="internal">Home</a></li>

            <li><a href="#about" class="internal">About</a></li>

            <li><a href="#work" class="internal">Projects</a></li>

            <li><a href="#services" class="internal">Services</a></li>

            <li><a href="#portfolio" class="internal">Portfolio</a></li>

            <li><a href="#contact" class="internal">Contact</a></li>
          </ul>

          <div class="copyright">
            &copy; Copyright John Doe. All Rights Reserved<br />
            Designed By <a href="http://www.spiralpixel.com/" target="_blank">Spiral Pixel</a>
          </div>
        </div>
      </div>
    </div>

  </body>
</html>
