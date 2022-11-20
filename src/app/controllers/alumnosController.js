const data = require("../utils/data");

class alumnosController {
  async alumnos(req, res) {
    const alumnos = data.alumnos;
    return res.status(200).json(alumnos);
  }

  async crearAlumno(req, res) {
    const { id, nombres, apellidos, matricula, promedio } = req.body;
    const alumno = { id, nombres, apellidos, matricula, promedio };
    data.alumnos.push(alumno);
    return res.status(201).json(alumno);
  }

  async mostrarAlumno(req, res) {
    const { id } = req.params;
    const alumnoEncontrado = data.alumnos.find((a) => (a.id == id));
    if (!alumnoEncontrado) {
      return res.status(404).json({ message: "alumno no existe" });
    }

    return res.status(200).json(alumnoEncontrado);
  }

  async actualizarAlumno(req, res) {
    const { id } = req.params;
    const { id:alumnoId, nombres, apellidos, matricula, promedio } = req.body;
    const informacionAlumno = { id, nombres, apellidos, matricula, promedio };
    const posicionAlumno = data.alumnos.findIndex((a) => a.id == id);
    if (posicionAlumno === -1) {
      return res.status(404).json({ message: "alumno no existe" });
    }
    data.alumnos[posicionAlumno] = { ...informacionAlumno }
    return res.status(200).json({ message: "alumno actualizado" });
  }

  async eliminarAlumno(req, res) {
    const { id } = req.params;
    const alumnoEncontrado = data.alumnos.find((a) => a.id == id);
    if (!alumnoEncontrado) {
      return res.status(404).json({ message: "alumno no existe" });
    }
    const alumnosFiltrados = data.alumnos.filter((a) => a.id != id);
    data.alumnos = alumnosFiltrados;
    return res.status(200).json({ message: "alumno actualizado" });
  }
}

module.exports = new alumnosController();
