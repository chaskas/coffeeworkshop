<?php use_helper('jQuery'); ?>
<script>
$(document).ready(function(){
  $('#expoForm-submit').click(function(){
    if($('#expositores_nombre').val() == 'Nombre')$('#expositores_nombre').val('');
    if($('#expositores_ocupacion').val() == 'Ocupación')$('#expositores_ocupacion').val('');
    if($('#expositores_email').val() == 'Email')$('#expositores_email').val('');
    if($('#expositores_fono').val() == 'Fono')$('#expositores_fono').val('');
    if($('#expositores_titulo').val() == 'Título de la Presentación')$('#expositores_titulo').val('');
    if($('#expositores_descripcion').val() == 'Descripción')$('#expositores_descripcion').val('');
  })
  
  if($('#expositores_nombre').val() == '')$('#expositores_nombre').val('Nombre');
  if($('#expositores_ocupacion').val() == '')$('#expositores_ocupacion').val('Ocupación');
  if($('#expositores_email').val() == '')$('#expositores_email').val('Email');
  if($('#expositores_fono').val() == '')$('#expositores_fono').val('Fono');
  if($('#expositores_titulo').val() == '')$('#expositores_titulo').val('Título de la Presentación');
  if($('#expositores_descripcion').val() == '')$('#expositores_descripcion').val('Descripción');
});
</script>
<?php echo jq_form_remote_tag(
        array(
            'url' => 'home/addExpositor', 
            'script' => true, 
            'update' => array('success' => 'expoFormDiv', 'failure' => "$('#mailsent').css('background-color','red')"), 
            'complete' => "$('#mailsent').show()"
            ),array('id'=>'ExpositorForm')); 
?>
<fieldset class="text-fields">
  <?php echo $expoForm['nombre']->render(array('onfocus' => 'if(this.value == "Nombre") { this.value = ""; }')); ?>
  <?php echo $expoForm['nombre']->renderError(); ?>
  <?php echo $expoForm['ocupacion']->render(array('onfocus' => 'if(this.value == "Ocupación") { this.value = ""; }')); ?>
  <?php echo $expoForm['ocupacion']->renderError(); ?>
  <?php echo $expoForm['email']->render(array('onfocus' => 'if(this.value == "Email") { this.value = ""; }')); ?>
  <?php echo $expoForm['email']->renderError(); ?>
  <?php echo $expoForm['fono']->render(array('onfocus' => 'if(this.value == "Fono") { this.value = ""; }')); ?>
  <?php echo $expoForm['fono']->renderError(); ?>
  <?php echo $expoForm['titulo']->render(array('onfocus' => 'if(this.value == "Título de la Presentación") { this.value = ""; }')); ?>
  <?php echo $expoForm['titulo']->renderError(); ?>
  <?php echo $expoForm['descripcion']->render(array('onfocus' => 'if(this.value == "Descripción") { this.value = ""; }')); ?>
  <?php echo $expoForm['descripcion']->renderError(); ?>
  <?php echo $expoForm->renderHiddenFields(); ?>
</fieldset>
<div style="clear:both;padding: 5px;"></div>

<input id="expoForm-submit" type="submit" name="submit" value="Enviar" class="red-btn" style="margin-right:10px;"/>
</form>