<?php
  include('inc/config.php');
  include('inc/framework.php');
  $framework -> default_page(WB_DEFAULT_PAGE);
  $framework -> current_page($_GET['do']);
  $_SERVER['REDIRECT_STATUS'] = 404;
?>
<?php include('template/header.php'); ?>
<?php include('template/menu.php'); ?>
<section class="container-fluid">
  <section class="row">
    <?php
      echo $framework -> render();
    ?>
  </section>
</section>
<?php include('template/footer.php'); ?>