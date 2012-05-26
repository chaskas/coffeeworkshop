<?php use_stylesheets_for_form($form) ?>
<?php use_javascripts_for_form($form) ?>

<form action="<?php echo url_for('expositor/'.($form->getObject()->isNew() ? 'create' : 'update').(!$form->getObject()->isNew() ? '?id='.$form->getObject()->getId() : '')) ?>" method="post" <?php $form->isMultipart() and print 'enctype="multipart/form-data" ' ?>>
<?php if (!$form->getObject()->isNew()): ?>
<input type="hidden" name="sf_method" value="put" />
<?php endif; ?>
  <table>
    <tfoot>
      <tr>
        <td colspan="2">
          <?php echo $form->renderHiddenFields(false) ?>
          &nbsp;
          <?php if (!$form->getObject()->isNew()): ?>
            &nbsp;<?php echo link_to('Borrar', 'expositor/delete?id='.$form->getObject()->getId(), array('method' => 'delete', 'confirm' => 'Are you sure?')) ?>
          <?php endif; ?>
          <input type="submit" value="Enviar" />
        </td>
      </tr>
    </tfoot>
    <tbody>
      <?php echo $form->renderGlobalErrors() ?>
      <tr>
        <th><?php echo $form['nombre']->renderLabel() ?></th>
        <td>
          <?php echo $form['nombre']->renderError() ?>
          <?php echo $form['nombre'] ?>
        </td>
      </tr>
      <tr>
        <th><?php echo $form['apellido']->renderLabel() ?></th>
        <td>
          <?php echo $form['apellido']->renderError() ?>
          <?php echo $form['apellido'] ?>
        </td>
      </tr>
      <tr>
        <th><?php echo $form['ocupacion']->renderLabel() ?></th>
        <td>
          <?php echo $form['ocupacion']->renderError() ?>
          <?php echo $form['ocupacion'] ?>
        </td>
      </tr>
      <tr>
        <th><?php echo $form['email']->renderLabel() ?></th>
        <td>
          <?php echo $form['email']->renderError() ?>
          <?php echo $form['email'] ?>
        </td>
      </tr>
      <tr>
        <th><?php echo $form['fono']->renderLabel() ?></th>
        <td>
          <?php echo $form['fono']->renderError() ?>
          <?php echo $form['fono'] ?>
        </td>
      </tr>
      <tr>
        <th><?php echo $form['titulo']->renderLabel() ?></th>
        <td>
          <?php echo $form['titulo']->renderError() ?>
          <?php echo $form['titulo'] ?>
        </td>
      </tr>
      <tr>
        <th><?php echo $form['descripcion']->renderLabel() ?></th>
        <td>
          <?php echo $form['descripcion']->renderError() ?>
          <?php echo $form['descripcion'] ?>
        </td>
      </tr>
    </tbody>
  </table>
</form>
