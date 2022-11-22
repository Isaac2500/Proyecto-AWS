const data = require("../utils/data");

class profesoresController {
  async profesores(req, res) {
    const profesores = data.profesores;
    return res.status(200).json(profesores);
  }

  async crearProfesor(req, res) {
    const { id, nombres, apellidos, numeroEmpleado, horasClase } = req.body;
    const profesor = { id, nombres, apellidos, numeroEmpleado, horasClase };
    data.profesores.push(profesor);
    return res.status(201).json(profesor);
  }
  async mostrarProfesor(req, res) {
    const { id } = req.params;
    const profesorEncontrado = data.profesores.find((a) => a.id == id);
    if (!profesorEncontrado) {
      return res.status(404).json({ message: "profesor no existe" });
    }

    return res.status(200).json(profesorEncontrado);
  }

  //terminar endpoint
  async actualizarProfesor(req, res) {
    const { id } = req.params;
    const { id:profesorId, nombres, apellidos, numeroEmpleado, horasClase } = req.body;
    const informacionProfesor = { id, nombres, apellidos, numeroEmpleado, horasClase };
    const posicionProfesor = data.profesores.findIndex((a) => a.id == id);
    if (posicionProfesor === -1) {
      return res.status(404).json({ message: "Profesor no existe" });
    }
    data.profesores[posicionProfesor] = { ...informacionProfesor }
    return res.status(200).json({ message: "Profesor actualizado" });
  }

  async eliminarProfesor(req, res) {
    const { id } = req.params;
    const profesorEncontrado = data.profesores.find((a) => a.id == id);
    if (profesorEncontrado === undefined) {
      return res.status(404).json({ message: "profesor no existe" });
    }
    const profesorFiltrados = data.profesores.filter((a) => a.id != id);
    data.profesores = profesorFiltrados;
    return res.status(200).json({ message: "profesor eliminado" });
  }
}

module.exports = new profesoresController();
