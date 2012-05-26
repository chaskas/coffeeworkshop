<h1>Expositoress List</h1>

<table>
  <thead>
    <tr>
      <th>Id</th>
      <th>Nombre</th>
      <th>Apellido</th>
      <th>Ocupacion</th>
      <th>Email</th>
      <th>Fono</th>
    </tr>
  </thead>
  <tbody>
    <?php foreach ($expositoress as $expositores): ?>
    <tr>
      <td><a href="<?php echo url_for('expositor/edit?id='.$expositores->getId()) ?>"><?php echo $expositores->getId() ?></a></td>
      <td><?php echo $expositores->getNombre() ?></td>
      <td><?php echo $expositores->getApellido() ?></td>
      <td><?php echo $expositores->getOcupacion() ?></td>
      <td><?php echo $expositores->getEmail() ?></td>
      <td><?php echo $expositores->getFono() ?></td>
    </tr>
    <?php endforeach; ?>
  </tbody>
</table>

  <a href="<?php echo url_for('expositor/new') ?>">New</a>
