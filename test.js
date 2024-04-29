require('./install/ChemDoodleWeb.js')
// Provide jQuery in the global scope
global.jQuery = require('jquery');

// print the PDB file to a JavaScript variable
let pdbFile = 'lightdock_0.pdb';
// read the PDB data and store the returned Molecule data structure as the variable, structure
let pdbStructure = ChemDoodle.readPDB(pdbFile);
// declare our 3D component
let display3d = new ChemDoodle.TransformCanvas3D('display3d', 400, 400);
// set the 3D representation for ligand atoms
display3d.styles.set3DRepresentation('van der Waals Spheres');
// set the 3D representation for the protein and nucleic acid atoms and set them to be displayed
// first, create a new Styles object
let newSpecs = new ChemDoodle.structures.Styles();
// display these atoms in wireframe
newSpecs.set3DRepresentation('Wireframe');
// set the residueSpecs variable for the Canvas3D to bind it
display3d.residueSpecs = newSpecs;
// set the original styles to display the protein and nucleic acid atoms and bonds
display3d.styles.macro_displayAtoms = true;
display3d.styles.macro_displayBonds = true;
// load the molecule into the Canvas
display3d.loadMolecule(pdbStructure);