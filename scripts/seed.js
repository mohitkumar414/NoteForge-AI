const mongoose = require('mongoose');
require('dotenv').config({ path: '.env.local' }); // Load env vars

// --- 1. DEFINE DATA HERE ---

const cseSem1Data = [
    {
        "branch": "Computer Science & Engineering",
        "semester": 1,
        "subject_name": "Mathematics - I",
        "modules": [
            {
                "module_number": 1,
                "title": "Solid Geometry",
                "topics": [
                    "Basic ideas of equation of plane and straight line",
                    "Intersection of planes",
                    "Shortest distance",
                    "Equation of sphere and equation of tangent plane",
                    "Equation of cone",
                    "Equation of cylinder",
                    "Identification of conicoids and its rough sketches"
                ]
            },
            {
                "module_number": 2,
                "title": "Differential Calculus of One Variable",
                "topics": [
                    "Successive differentiation and Leibnitz's theorem",
                    "Expansion of functions into Taylor's and Maclaurin Series",
                    "Tangent and Normal of a curve",
                    "Point of inflexion",
                    "Concavity and Convexity",
                    "Curvature and radius of curvature",
                    "Asymptotes of Cartesian curves and curve tracing"
                ]
            },
            {
                "module_number": 3,
                "title": "Differential Calculus of Two or More Variables",
                "topics": [
                    "Limit, Continuity and differentiability",
                    "Partial derivative",
                    "Euler's theorem",
                    "Chain rule",
                    "Differentiation of implicit function",
                    "Total differentiation",
                    "Taylor's expansion",
                    "Jacobian",
                    "Maxima and minima of function of two variables",
                    "Lagrange's method of undetermined multipliers"
                ]
            },
            {
                "module_number": 4,
                "title": "Infinite Series",
                "topics": [
                    "Convergence and Divergence of Infinite Series",
                    "General properties",
                    "Comparison test",
                    "Integral test",
                    "D'Alembert's Ratio test",
                    "Raabe's test",
                    "Logarithmic test",
                    "Cauchy's root test",
                    "Alternating Sum",
                    "Leibnitz's rule of Convergence",
                    "Absolute Convergent and Conditionally Convergent Series",
                    "Convergence of Power Series"
                ]
            }
        ]
    },
    {
        "branch": "Computer Science & Engineering",
        "semester": 1,
        "subject_name": "Chemistry",
        "modules": [
            {
                "module_number": 1,
                "title": "Quantum Mechanics",
                "topics": [
                    "Schrodinger Wave Equation",
                    "Particle in one dimensional box",
                    "Illustrating energy quantization"
                ]
            },
            {
                "module_number": 2,
                "title": "Thermodynamics",
                "topics": [
                    "Laws of Thermodynamics",
                    "Entropy Concept",
                    "Chemical potential"
                ]
            },
            {
                "module_number": 3,
                "title": "Electrochemistry",
                "topics": [
                    "Concepts of electrode potentials",
                    "Nernst Equation",
                    "Reference Electrode",
                    "Chemistry of Secondary cells (e.g. Lead-acid or Ni-Cd cells)",
                    "Corrosion & its Prevention",
                    "Electrochemical theory of corrosion",
                    "Types of corrosion",
                    "Corrosion prevention & its control"
                ]
            },
            {
                "module_number": 4,
                "title": "Chemical Kinetics / Reaction Dynamics",
                "topics": [
                    "Rate laws",
                    "First order & Second order of reaction",
                    "Reversible first order reaction"
                ]
            },
            {
                "module_number": 5,
                "title": "Stereochemistry and Organic Reactions",
                "topics": [
                    "Concept of chirality, enantiomers/diastereoisomers",
                    "Centre & axis of chirality",
                    "Optical purity",
                    "Relative & absolute configurations (R-S & E-Z notations)",
                    "Geometrical isomers",
                    "Hofman reaction",
                    "Riemer-Tieman reaction",
                    "Diels Alder reaction",
                    "Cannizaro reaction",
                    "Skraup synthesis",
                    "Perkin Condensation",
                    "Aldol Condensation"
                ]
            },
            {
                "module_number": 6,
                "title": "Polymers",
                "topics": [
                    "Concept of polymerization",
                    "Types of Polymers",
                    "Mechanism of anionic/cationic/free radical polymerization",
                    "Commercial polymers & their uses (Nylon, PE, PP, ABS, BUNA-S, BUNA-N)"
                ]
            },
            {
                "module_number": 7,
                "title": "Coordination Chemistry",
                "topics": [
                    "Nomenclature of complexes",
                    "Isomerism",
                    "Valence Bond Theory",
                    "Crystal Field Theory",
                    "Molecular orbital theory of Homo nuclear & hetero nuclear diatomic Molecules"
                ]
            }
        ]
    },
    {
        "branch": "Computer Science & Engineering",
        "semester": 1,
        "subject_name": "English for Communication",
        "modules": [
            {
                "module_number": 1,
                "title": "Grammar Principles and Vocabulary Building",
                "topics": [
                    "Exposure to basics of grammar",
                    "Parts of speech",
                    "Tenses",
                    "Active and passive voice",
                    "Reported speech",
                    "Idioms and Phrases",
                    "Vocabulary development through prefixes, suffixes and word roots"
                ]
            },
            {
                "module_number": 2,
                "title": "Effective Sentence Construction",
                "topics": [
                    "Clarity and precision in construction",
                    "Strategies for effectiveness in writing"
                ]
            },
            {
                "module_number": 3,
                "title": "Paragraphs",
                "topics": [
                    "Definition and structure",
                    "Types and Composition",
                    "Unity of theme",
                    "Coherence and organization patterns"
                ]
            },
            {
                "module_number": 4,
                "title": "Note-making",
                "topics": [
                    "Uses and steps in note-making",
                    "Identification of important points",
                    "Reduction to phrases",
                    "Selection of suitable note format",
                    "Types of notes: tree diagram, block list, table"
                ]
            },
            {
                "module_number": 5,
                "title": "Letter Writing",
                "topics": [
                    "Business, Official and Informal letters",
                    "Communicative purpose and strategy",
                    "Letter format and mechanics",
                    "Letters of request, complaint and invitation"
                ]
            },
            {
                "module_number": 6,
                "title": "Reading Techniques",
                "topics": [
                    "Skimming and Scanning",
                    "Quick reading for gist",
                    "Suggesting titles",
                    "Looking for specific information"
                ]
            },
            {
                "module_number": 7,
                "title": "Description of Graphics",
                "topics": [
                    "Kinds of graphs",
                    "Construction and use",
                    "Application in scientific texts",
                    "Interpretation of graphs using expressions of comparison and contrast"
                ]
            },
            {
                "module_number": 8,
                "title": "Reading Comprehension",
                "topics": [
                    "Reading to retrieve information",
                    "Techniques of comprehension",
                    "Finding clues to locate important points",
                    "Answering objective type questions (inference, elimination)"
                ]
            },
            {
                "module_number": 9,
                "title": "Technical Report-Writing",
                "topics": [
                    "Kinds of reports: proposals, progress and final reports",
                    "Structure and features",
                    "Process of writing a report",
                    "Editing"
                ]
            },
            {
                "module_number": 10,
                "title": "Book Reviews",
                "topics": [
                    "Oral and written review of a chosen novel/play",
                    "Brief written analysis including summary and appreciation",
                    "Oral presentation of the novel before class"
                ]
            }
        ]
    },
    {
        "branch": "Computer Science & Engineering",
        "semester": 1,
        "subject_name": "Computer Programming & Data Structure",
        "modules": [
            {
                "module_number": 1,
                "title": "Computer Fundamental & Programming in C",
                "topics": [
                    "History, Generations, Characteristic and Applications of Computers",
                    "Computer Languages, Types of Software",
                    "Introduction to C: Variables, Operators, Statements, Conditions",
                    "Looping and decision making (if, else, for, while, do-while, Switch Case, goto)"
                ]
            },
            {
                "module_number": 2,
                "title": "Functions",
                "topics": [
                    "Definition, Declaration, Calling",
                    "Passing arguments, Reference arguments",
                    "Variables and storage classes"
                ]
            },
            {
                "module_number": 3,
                "title": "Arrays & Structures",
                "topics": [
                    "Arrays: Introduction, Representation, Initialization & Accessing of 1D, 2D and Multi dimensional Arrays",
                    "Structures: Specifying the structure, Defining structure Variables, Accessing structure members, Structures within structure"
                ]
            },
            {
                "module_number": 4,
                "title": "Pointers",
                "topics": [
                    "Address and Pointers",
                    "Pointers and Arrays",
                    "Pointers and Functions"
                ]
            },
            {
                "module_number": 5,
                "title": "File Handling",
                "topics": [
                    "Introduction, Defining and opening a file",
                    "Closing a file",
                    "Input/Output operations on Files"
                ]
            },
            {
                "module_number": 6,
                "title": "Introduction to Object Oriented Programming Concepts",
                "topics": [
                    "Difference between structured and OOPS concept",
                    "Advantages of OOPS",
                    "Object and classes: Simple classes, Constructors, Destructors",
                    "Object as function Arguments",
                    "Inheritance: Definition, Types, use of public, protected, private keywords",
                    "Polymorphism: Definition, Function Overloading, Operator Overloading"
                ]
            },
            {
                "module_number": 7,
                "title": "Basics Of Data Structure",
                "topics": [
                    "Introduction & Classification of Data Structure",
                    "Introduction to Linear & Non-linear Data Structures",
                    "Arrays, Stacks, Queues, Linked Lists, Tree & Graph"
                ]
            }
        ]
    },
    {
        "branch": "Computer Science & Engineering",
        "semester": 1,
        "subject_name": "Engineering Drawing",
        "modules": [
            {
                "module_number": 1,
                "title": "Introduction of Engineering Graphics",
                "topics": [
                    "Need of engineering graphics",
                    "Lettering and dimensioning",
                    "Types of lines",
                    "Scale preparation"
                ]
            },
            {
                "module_number": 2,
                "title": "Projection of Point and Straight Lines",
                "topics": [
                    "One plate projection"
                ]
            },
            {
                "module_number": 3,
                "title": "Projection of Solids",
                "topics": [
                    "One plate projection"
                ]
            },
            {
                "module_number": 4,
                "title": "Section of Solids",
                "topics": [
                    "One plate projection"
                ]
            },
            {
                "module_number": 5,
                "title": "Intersection of Solids",
                "topics": [
                    "One plate projection"
                ]
            },
            {
                "module_number": 6,
                "title": "Development of Surfaces",
                "topics": [
                    "One plate projection"
                ]
            },
            {
                "module_number": 7,
                "title": "Orthographic Projection",
                "topics": [
                    "One plate projection"
                ]
            },
            {
                "module_number": 8,
                "title": "Isometric Projections",
                "topics": [
                    "Isometric scale",
                    "One plate projection"
                ]
            }
        ]
    }
];

const eceSem1Data = [
    {
        "branch": "Electronics & Communication Engineering",
        "semester": 1,
        "subject_name": "Mathematics - I",
        "modules": [
            {
                "module_number": 1,
                "title": "Solid Geometry",
                "topics": [
                    "Basic ideas of equation of plane and straight line",
                    "Intersection of planes",
                    "Shortest distance",
                    "Equation of sphere and equation of tangent plane",
                    "Equation of cone",
                    "Equation of cylinder",
                    "Identification of conicoids and its rough sketches"
                ]
            },
            {
                "module_number": 2,
                "title": "Differential Calculus of One Variable",
                "topics": [
                    "Successive differentiation and Leibnitz's theorem",
                    "Expansion of functions into Taylor's and Maclaurin Series",
                    "Tangent and Normal of a curve",
                    "Point of inflexion",
                    "Concavity and Convexity",
                    "Curvature and radius of curvature",
                    "Asymptotes of Cartesian curves and curve tracing"
                ]
            },
            {
                "module_number": 3,
                "title": "Differential Calculus of Two or More Variables",
                "topics": [
                    "Limit, Continuity and differentiability",
                    "Partial derivative",
                    "Euler's theorem",
                    "Chain rule",
                    "Differentiation of implicit function",
                    "Total differentiation",
                    "Taylor's expansion",
                    "Jacobian",
                    "Maxima and minima of function of two variables",
                    "Lagrange's method of undetermined multipliers"
                ]
            },
            {
                "module_number": 4,
                "title": "Infinite Series",
                "topics": [
                    "Convergence and Divergence of Infinite Series",
                    "General properties",
                    "Comparison test",
                    "Integral test",
                    "D'Alembert's Ratio test",
                    "Raabe's test",
                    "Logarithmic test",
                    "Cauchy's root test",
                    "Alternating Sum",
                    "Leibnitz's rule of Convergence",
                    "Absolute Convergent and Conditionally Convergent Series",
                    "Convergence of Power Series"
                ]
            }
        ]
    },
    {
        "branch": "Electronics & Communication Engineering",
        "semester": 1,
        "subject_name": "Physics",
        "modules": [
            {
                "module_number": 1,
                "title": "Vector Analysis",
                "topics": [
                    "Scalar and vector field",
                    "Gradient of scalar field",
                    "Divergence and curl of a vector field and their physical meaning",
                    "Line, surface and volume integrals",
                    "Gauss' divergence theorem",
                    "Stoke's theorem"
                ]
            },
            {
                "module_number": 2,
                "title": "Polarization of Light",
                "topics": [
                    "Introduction to polarization of light",
                    "Malus law",
                    "Brewster's law",
                    "Double refraction",
                    "Nicol prism",
                    "Retardation plates",
                    "Production and analysis of plane, circularly and elliptically polarized light",
                    "Introduction to Polaroids"
                ]
            },
            {
                "module_number": 3,
                "title": "Electromagnetic Theory",
                "topics": [
                    "Gauss, Faraday and Ampere's law",
                    "Maxwell's field equations",
                    "Poynting theorem",
                    "Propagation of electromagnetic wave in free space"
                ]
            },
            {
                "module_number": 4,
                "title": "Modern Physics",
                "topics": [
                    "Introduction and characterization of X-rays",
                    "Bragg's law",
                    "Photoelectric effect and its explanation",
                    "Einstein's photoelectric equation",
                    "Compton effect",
                    "Concept of de-Broglie wave",
                    "Wave and group velocity",
                    "Uncertainty principle"
                ]
            },
            {
                "module_number": 5,
                "title": "Quantum Physics",
                "topics": [
                    "Wave function and its physical meaning",
                    "Schrödinger's wave equation",
                    "Time independent and time dependent form",
                    "Eigen function and Eigen values",
                    "Particle in a box",
                    "Tunneling effect"
                ]
            },
            {
                "module_number": 6,
                "title": "Relativistic Mechanics",
                "topics": [
                    "Michelson Morley experiment",
                    "Postulates of Special theory of relativity",
                    "Galilean transformation",
                    "Lorentz transformation",
                    "Length contraction",
                    "Time dilation and velocity addition",
                    "Mass-energy relation",
                    "Variation of mass with energy"
                ]
            },
            {
                "module_number": 7,
                "title": "Laser Physics",
                "topics": [
                    "Spontaneous and stimulated emission",
                    "Population inversion",
                    "Einstein's A & B coefficients",
                    "Coherence-spatial and temporal",
                    "Measurement of temporal coherence length using Michelson interferometer",
                    "Ruby, He-Ne and other types of lasers and their applications"
                ]
            }
        ]
    },
    {
        "branch": "Electronics & Communication Engineering",
        "semester": 1,
        "subject_name": "Electrical Technology",
        "modules": [
            {
                "module_number": 1,
                "title": "DC Networks",
                "topics": [
                    "Kirchhoff's law",
                    "Node Voltage and Mesh Current method",
                    "Delta-Star and Star-delta transformation",
                    "Superposition theorem",
                    "Thevenin's and Norton's theorem",
                    "Maximum power transfer theorem"
                ]
            },
            {
                "module_number": 2,
                "title": "Single phase AC circuits",
                "topics": [
                    "Single phase EMF generation",
                    "Average and RMS value of Sinusoidal and Rectangular waveforms",
                    "Form factor and peak factor",
                    "Solution of R,L,C series and parallel circuits",
                    "Complex representation of Impedances",
                    "Phasor diagram",
                    "Power factor"
                ]
            },
            {
                "module_number": 3,
                "title": "Three phase balance AC circuits",
                "topics": [
                    "Three phase EMF generation",
                    "Delta and Star connection",
                    "Line and phase quantities",
                    "Balance supply voltage and balanced load",
                    "Phasor diagram",
                    "Measurement of power in three phase circuits by two wattmeter method"
                ]
            },
            {
                "module_number": 4,
                "title": "Magnetic Circuits",
                "topics": [
                    "Concepts of self and mutual inductances",
                    "Co-efficient of coupling",
                    "B-H Curve",
                    "Hysteresis loop"
                ]
            },
            {
                "module_number": 5,
                "title": "Basics of Single phase Transformer",
                "topics": [
                    "Construction and working principle",
                    "EMF equation",
                    "Phasor diagram on No load and full load",
                    "Equivalent circuit",
                    "Regulation, efficiency",
                    "Short circuit and open circuit test",
                    "Introduction to single phase auto transformer"
                ]
            },
            {
                "module_number": 6,
                "title": "Basics of DC machines",
                "topics": [
                    "Principle of operation",
                    "Classification",
                    "EMF and torque equations",
                    "Characteristics of generators and motors",
                    "Speed control methods and starting techniques"
                ]
            },
            {
                "module_number": 7,
                "title": "Basics of three phase Induction motor",
                "topics": [
                    "Principle of rotating magnetic field",
                    "Construction and principle of three phase IM",
                    "Torque-speed characteristic of three phase IM",
                    "Starting methods and speed control of three phase IM"
                ]
            },
            {
                "module_number": 8,
                "title": "Measuring Instruments",
                "topics": [
                    "Moving coil and moving Iron Ammeters and voltmeters",
                    "Dynamometer type wattmeter",
                    "Induction type energy meter"
                ]
            }
        ]
    },
    {
        "branch": "Electronics & Communication Engineering",
        "semester": 1,
        "subject_name": "Introduction to Manufacturing Process",
        "modules": [
            {
                "module_number": 1,
                "title": "Fitting trade",
                "topics": [
                    "Study of fitting tools equipments and different fitting operations",
                    "Preparation of work piece as per given specification"
                ]
            },
            {
                "module_number": 2,
                "title": "Carpentry",
                "topics": [
                    "Study of carpentry tools, equipments and different joints",
                    "Preparation of a job on one of the joints"
                ]
            },
            {
                "module_number": 3,
                "title": "Foundry",
                "topics": [
                    "Introduction to foundry, pattern, pattern allowances",
                    "Ingredients of moulding sand, melting furnaces",
                    "Foundry tools and their purposes",
                    "Demo of mould preparation, preparation of mould as a job"
                ]
            },
            {
                "module_number": 4,
                "title": "Smithy",
                "topics": [
                    "Forging, hot working and cold working",
                    "Smithy tools",
                    "Preparation of a job"
                ]
            }
        ]
    },
    {
        "branch": "Electronics & Communication Engineering",
        "semester": 1,
        "subject_name": "Engineering Mechanics",
        "modules": [
            {
                "module_number": 1,
                "title": "Various Systems of Forces",
                "topics": [
                    "Statically Equivalent Force systems",
                    "Simplest Equivalent of a system of forces using vector methods"
                ]
            },
            {
                "module_number": 2,
                "title": "Equilibrium",
                "topics": [
                    "Free Body Diagram",
                    "Equations of equilibrium and their applications to various system of forces",
                    "Plane Trusses and frames"
                ]
            },
            {
                "module_number": 3,
                "title": "Friction",
                "topics": [
                    "Friction on dry surfaces",
                    "Static, Kinetic and rolling friction",
                    "Applications to inclined planes, Wedges and blocks"
                ]
            },
            {
                "module_number": 4,
                "title": "Kinematics and Kinetics of a Particle",
                "topics": [
                    "Rectilinear and curvilinear translations",
                    "Normal and tangential components of acceleration",
                    "Radial and transverse components of acceleration"
                ]
            },
            {
                "module_number": 5,
                "title": "Kinematics and Kinetics of Rigid Bodies in Plane Motion",
                "topics": [
                    "Angular velocity and angular acceleration",
                    "Effective Forces on a rigid body",
                    "D'Alembert's Principle",
                    "Rotation of Rigid bodies",
                    "Rolling motion & Plane motion of rigid bodies"
                ]
            },
            {
                "module_number": 6,
                "title": "Impulse and Momentum",
                "topics": [
                    "Principle of impulse and momentum",
                    "Linear impulse and linear momentum",
                    "Angular impulse and angular momentum",
                    "Impact of elastic bodies"
                ]
            },
            {
                "module_number": 7,
                "title": "Work, Energy and Power",
                "topics": [
                    "Work done by forces and couples",
                    "Potential, Elastic and kinetic energy",
                    "Work-energy theorem",
                    "Work-energy analysis",
                    "Conservation of energy",
                    "Concept of Power and efficiency"
                ]
            },
            {
                "module_number": 8,
                "title": "Centroid and Moment of Inertia",
                "topics": [
                    "Centroid and M.I. of area",
                    "Radius of gyration",
                    "Parallel axis and perpendicular axis theorem"
                ]
            }
        ]
    }
];

const meSem1Data = [
    {
        "branch": "Mechanical Engineering",
        "semester": 1,
        "subject_name": "Mathematics - I",
        "modules": [
            {
                "module_number": 1,
                "title": "Solid Geometry",
                "topics": [
                    "Basic ideas of equation of plane and straight line",
                    "Intersection of planes",
                    "Shortest distance",
                    "Equation of sphere and equation of tangent plane",
                    "Equation of cone",
                    "Equation of cylinder",
                    "Identification of conicoids and its rough sketches"
                ]
            },
            {
                "module_number": 2,
                "title": "Differential Calculus of One Variable",
                "topics": [
                    "Successive differentiation and Leibnitz's theorem",
                    "Expansion of functions into Taylor's and Maclaurin Series",
                    "Tangent and Normal of a curve",
                    "Point of inflexion",
                    "Concavity and Convexity",
                    "Curvature and radius of curvature",
                    "Asymptotes of Cartesian curves and curve tracing"
                ]
            },
            {
                "module_number": 3,
                "title": "Differential Calculus of Two or More Variables",
                "topics": [
                    "Limit, Continuity and differentiability",
                    "Partial derivative",
                    "Euler's theorem",
                    "Chain rule",
                    "Differentiation of implicit function",
                    "Total differentiation",
                    "Taylor's expansion",
                    "Jacobian",
                    "Maxima and minima of function of two variables",
                    "Lagrange's method of undetermined multipliers"
                ]
            },
            {
                "module_number": 4,
                "title": "Infinite Series",
                "topics": [
                    "Convergence and Divergence of Infinite Series",
                    "General properties",
                    "Comparison test",
                    "Integral test",
                    "D'Alembert's Ratio test",
                    "Raabe's test",
                    "Logarithmic test",
                    "Cauchy's root test",
                    "Alternating Sum",
                    "Leibnitz's rule of Convergence",
                    "Absolute Convergent and Conditionally Convergent Series",
                    "Convergence of Power Series"
                ]
            }
        ]
    },
    {
        "branch": "Mechanical Engineering",
        "semester": 1,
        "subject_name": "Physics",
        "modules": [
            {
                "module_number": 1,
                "title": "Vector Analysis",
                "topics": [
                    "Scalar and vector field",
                    "Gradient of scalar field",
                    "Divergence and curl of a vector field and their physical meaning",
                    "Line, surface and volume integrals",
                    "Gauss' divergence theorem",
                    "Stoke's theorem"
                ]
            },
            {
                "module_number": 2,
                "title": "Polarization of Light",
                "topics": [
                    "Introduction to polarization of light",
                    "Malus law",
                    "Brewster's law",
                    "Double refraction",
                    "Nicol prism",
                    "Retardation plates",
                    "Production and analysis of plane, circularly and elliptically polarized light",
                    "Introduction to Polaroids"
                ]
            },
            {
                "module_number": 3,
                "title": "Electromagnetic Theory",
                "topics": [
                    "Gauss, Faraday and Ampere's law",
                    "Maxwell's field equations",
                    "Poynting theorem",
                    "Propagation of electromagnetic wave in free space"
                ]
            },
            {
                "module_number": 4,
                "title": "Modern Physics",
                "topics": [
                    "Introduction and characterization of X-rays",
                    "Bragg's law",
                    "Photoelectric effect and its explanation",
                    "Einstein's photoelectric equation",
                    "Compton effect",
                    "Concept of de-Broglie wave",
                    "Wave and group velocity",
                    "Uncertainty principle"
                ]
            },
            {
                "module_number": 5,
                "title": "Quantum Physics",
                "topics": [
                    "Wave function and its physical meaning",
                    "Schrödinger's wave equation",
                    "Time independent and time dependent form",
                    "Eigen function and Eigen values",
                    "Particle in a box",
                    "Tunneling effect"
                ]
            },
            {
                "module_number": 6,
                "title": "Relativistic Mechanics",
                "topics": [
                    "Michelson Morley experiment",
                    "Postulates of Special theory of relativity",
                    "Galilean transformation",
                    "Lorentz transformation",
                    "Length contraction",
                    "Time dilation and velocity addition",
                    "Mass-energy relation",
                    "Variation of mass with energy"
                ]
            },
            {
                "module_number": 7,
                "title": "Laser Physics",
                "topics": [
                    "Spontaneous and stimulated emission",
                    "Population inversion",
                    "Einstein's A & B coefficients",
                    "Coherence-spatial and temporal",
                    "Measurement of temporal coherence length using Michelson interferometer",
                    "Ruby, He-Ne and other types of lasers and their applications"
                ]
            }
        ]
    },
    {
        "branch": "Mechanical Engineering",
        "semester": 1,
        "subject_name": "Electrical Technology",
        "modules": [
            {
                "module_number": 1,
                "title": "DC Networks",
                "topics": [
                    "Kirchhoff's law",
                    "Node Voltage and Mesh Current method",
                    "Delta-Star and Star-delta transformation",
                    "Superposition theorem",
                    "Thevenin's and Norton's theorem",
                    "Maximum power transfer theorem"
                ]
            },
            {
                "module_number": 2,
                "title": "Single phase AC circuits",
                "topics": [
                    "Single phase EMF generation",
                    "Average and RMS value of Sinusoidal and Rectangular waveforms",
                    "Form factor and peak factor",
                    "Solution of R,L,C series and parallel circuits",
                    "Complex representation of Impedances",
                    "Phasor diagram",
                    "Power factor"
                ]
            },
            {
                "module_number": 3,
                "title": "Three phase balance AC circuits",
                "topics": [
                    "Three phase EMF generation",
                    "Delta and Star connection",
                    "Line and phase quantities",
                    "Balance supply voltage and balanced load",
                    "Phasor diagram",
                    "Measurement of power in three phase circuits by two wattmeter method"
                ]
            },
            {
                "module_number": 4,
                "title": "Magnetic Circuits",
                "topics": [
                    "Concepts of self and mutual inductances",
                    "Co-efficient of coupling",
                    "B-H Curve",
                    "Hysteresis loop"
                ]
            },
            {
                "module_number": 5,
                "title": "Basics of Single phase Transformer",
                "topics": [
                    "Construction and working principle",
                    "EMF equation",
                    "Phasor diagram on No load and full load",
                    "Equivalent circuit",
                    "Regulation, efficiency",
                    "Short circuit and open circuit test",
                    "Introduction to single phase auto transformer"
                ]
            },
            {
                "module_number": 6,
                "title": "Basics of DC machines",
                "topics": [
                    "Principle of operation",
                    "Classification",
                    "EMF and torque equations",
                    "Characteristics of generators and motors",
                    "Speed control methods and starting techniques"
                ]
            },
            {
                "module_number": 7,
                "title": "Basics of three phase Induction motor",
                "topics": [
                    "Principle of rotating magnetic field",
                    "Construction and principle of three phase IM",
                    "Torque-speed characteristic of three phase IM",
                    "Starting methods and speed control of three phase IM"
                ]
            },
            {
                "module_number": 8,
                "title": "Measuring Instruments",
                "topics": [
                    "Moving coil and moving Iron Ammeters and voltmeters",
                    "Dynamometer type wattmeter",
                    "Induction type energy meter"
                ]
            }
        ]
    },
    {
        "branch": "Mechanical Engineering",
        "semester": 1,
        "subject_name": "Introduction to Manufacturing Process",
        "modules": [
            {
                "module_number": 1,
                "title": "Fitting trade",
                "topics": [
                    "Study of fitting tools equipments and different fitting operations",
                    "Preparation of work piece as per given specification"
                ]
            },
            {
                "module_number": 2,
                "title": "Carpentry",
                "topics": [
                    "Study of carpentry tools, equipments and different joints",
                    "Preparation of a job on one of the joints"
                ]
            },
            {
                "module_number": 3,
                "title": "Foundry",
                "topics": [
                    "Introduction to foundry, pattern, pattern allowances",
                    "Ingredients of moulding sand, melting furnaces",
                    "Foundry tools and their purposes",
                    "Demo of mould preparation, preparation of mould as a job"
                ]
            },
            {
                "module_number": 4,
                "title": "Smithy",
                "topics": [
                    "Forging, hot working and cold working",
                    "Smithy tools",
                    "Preparation of a job"
                ]
            }
        ]
    },
    {
        "branch": "Mechanical Engineering",
        "semester": 1,
        "subject_name": "Engineering Mechanics",
        "modules": [
            {
                "module_number": 1,
                "title": "Various Systems of Forces",
                "topics": [
                    "Statically Equivalent Force systems",
                    "Simplest Equivalent of a system of forces using vector methods"
                ]
            },
            {
                "module_number": 2,
                "title": "Equilibrium",
                "topics": [
                    "Free Body Diagram",
                    "Equations of equilibrium and their applications to various system of forces",
                    "Plane Trusses and frames"
                ]
            },
            {
                "module_number": 3,
                "title": "Friction",
                "topics": [
                    "Friction on dry surfaces",
                    "Static, Kinetic and rolling friction",
                    "Applications to inclined planes, Wedges and blocks"
                ]
            },
            {
                "module_number": 4,
                "title": "Kinematics and Kinetics of a Particle",
                "topics": [
                    "Rectilinear and curvilinear translations",
                    "Normal and tangential components of acceleration",
                    "Radial and transverse components of acceleration"
                ]
            },
            {
                "module_number": 5,
                "title": "Kinematics and Kinetics of Rigid Bodies in Plane Motion",
                "topics": [
                    "Angular velocity and angular acceleration",
                    "Effective Forces on a rigid body",
                    "D'Alembert's Principle",
                    "Rotation of Rigid bodies",
                    "Rolling motion & Plane motion of rigid bodies"
                ]
            },
            {
                "module_number": 6,
                "title": "Impulse and Momentum",
                "topics": [
                    "Principle of impulse and momentum",
                    "Linear impulse and linear momentum",
                    "Angular impulse and angular momentum",
                    "Impact of elastic bodies"
                ]
            },
            {
                "module_number": 7,
                "title": "Work, Energy and Power",
                "topics": [
                    "Work done by forces and couples",
                    "Potential, Elastic and kinetic energy",
                    "Work-energy theorem",
                    "Work-energy analysis",
                    "Conservation of energy",
                    "Concept of Power and efficiency"
                ]
            },
            {
                "module_number": 8,
                "title": "Centroid and Moment of Inertia",
                "topics": [
                    "Centroid and M.I. of area",
                    "Radius of gyration",
                    "Parallel axis and perpendicular axis theorem"
                ]
            }
        ]
    }
];

const cseSem2Data = [
    {
        "branch": "Computer Science & Engineering",
        "semester": 2,
        "subject_name": "Physics",
        "modules": [
            {
                "module_number": 1,
                "title": "Vector Analysis",
                "topics": [
                    "Scalar and vector field",
                    "Gradient of scalar field",
                    "Divergence and curl of a vector field and their physical meaning",
                    "Line, surface and volume integrals",
                    "Gauss' divergence theorem",
                    "Stoke's theorem"
                ]
            },
            {
                "module_number": 2,
                "title": "Polarization of Light",
                "topics": [
                    "Introduction to polarization of light",
                    "Malus law",
                    "Brewster's law",
                    "Double refraction",
                    "Nicol prism",
                    "Retardation plates",
                    "Production and analysis of plane, circularly and elliptically polarized light",
                    "Introduction to Polaroids"
                ]
            },
            {
                "module_number": 3,
                "title": "Electromagnetic Theory",
                "topics": [
                    "Gauss, Faraday and Ampere's law",
                    "Maxwell's field equations",
                    "Poynting theorem",
                    "Propagation of electromagnetic wave in free space"
                ]
            },
            {
                "module_number": 4,
                "title": "Modern Physics",
                "topics": [
                    "Introduction and characterization of X-rays",
                    "Bragg's law",
                    "Photoelectric effect and its explanation",
                    "Einstein's photoelectric equation",
                    "Compton effect",
                    "Concept of de-Broglie wave",
                    "Wave and group velocity",
                    "Uncertainty principle"
                ]
            },
            {
                "module_number": 5,
                "title": "Quantum Physics",
                "topics": [
                    "Wave function and its physical meaning",
                    "Schrödinger's wave equation",
                    "Time independent and time dependent form",
                    "Eigen function and Eigen values",
                    "Particle in a box",
                    "Tunneling effect"
                ]
            },
            {
                "module_number": 6,
                "title": "Relativistic Mechanics",
                "topics": [
                    "Michelson Morley experiment",
                    "Postulates of Special theory of relativity",
                    "Galilean transformation",
                    "Lorentz transformation",
                    "Length contraction",
                    "Time dilation and velocity addition",
                    "Mass-energy relation",
                    "Variation of mass with energy"
                ]
            },
            {
                "module_number": 7,
                "title": "Laser Physics",
                "topics": [
                    "Spontaneous and stimulated emission",
                    "Population inversion",
                    "Einstein's A & B coefficients",
                    "Coherence-spatial and temporal",
                    "Measurement of temporal coherence length using Michelson interferometer",
                    "Ruby, He-Ne and other types of lasers and their applications"
                ]
            }
        ]
    },
    {
        "branch": "Computer Science & Engineering",
        "semester": 2,
        "subject_name": "Electrical Technology",
        "modules": [
            {
                "module_number": 1,
                "title": "DC Networks",
                "topics": [
                    "Kirchhoff's law",
                    "Node Voltage and Mesh Current method",
                    "Delta-Star and Star-delta transformation",
                    "Superposition theorem",
                    "Thevenin's and Norton's theorem",
                    "Maximum power transfer theorem"
                ]
            },
            {
                "module_number": 2,
                "title": "Single phase AC circuits",
                "topics": [
                    "Single phase EMF generation",
                    "Average and RMS value of Sinusoidal and Rectangular waveforms",
                    "Form factor and peak factor",
                    "Solution of R,L,C series and parallel circuits",
                    "Complex representation of Impedances",
                    "Phasor diagram",
                    "Power factor"
                ]
            },
            {
                "module_number": 3,
                "title": "Three phase balance AC circuits",
                "topics": [
                    "Three phase EMF generation",
                    "Delta and Star connection",
                    "Line and phase quantities",
                    "Balance supply voltage and balanced load",
                    "Phasor diagram",
                    "Measurement of power in three phase circuits by two wattmeter method"
                ]
            },
            {
                "module_number": 4,
                "title": "Magnetic Circuits",
                "topics": [
                    "Concepts of self and mutual inductances",
                    "Co-efficient of coupling",
                    "B-H Curve",
                    "Hysteresis loop"
                ]
            },
            {
                "module_number": 5,
                "title": "Basics of Single phase Transformer",
                "topics": [
                    "Construction and working principle",
                    "EMF equation",
                    "Phasor diagram on No load and full load",
                    "Equivalent circuit",
                    "Regulation, efficiency",
                    "Short circuit and open circuit test",
                    "Introduction to single phase auto transformer"
                ]
            },
            {
                "module_number": 6,
                "title": "Basics of DC machines",
                "topics": [
                    "Principle of operation",
                    "Classification",
                    "EMF and torque equations",
                    "Characteristics of generators and motors",
                    "Speed control methods and starting techniques"
                ]
            },
            {
                "module_number": 7,
                "title": "Basics of three phase Induction motor",
                "topics": [
                    "Principle of rotating magnetic field",
                    "Construction and principle of three phase IM",
                    "Torque-speed characteristic of three phase IM",
                    "Starting methods and speed control of three phase IM"
                ]
            },
            {
                "module_number": 8,
                "title": "Measuring Instruments",
                "topics": [
                    "Moving coil and moving Iron Ammeters and voltmeters",
                    "Dynamometer type wattmeter",
                    "Induction type energy meter"
                ]
            }
        ]
    },
    {
        "branch": "Computer Science & Engineering",
        "semester": 2,
        "subject_name": "Introduction to Manufacturing Process",
        "modules": [
            {
                "module_number": 1,
                "title": "Fitting trade",
                "topics": [
                    "Study of fitting tools equipments and different fitting operations",
                    "Preparation of work piece as per given specification"
                ]
            },
            {
                "module_number": 2,
                "title": "Carpentry",
                "topics": [
                    "Study of carpentry tools, equipments and different joints",
                    "Preparation of a job on one of the joints"
                ]
            },
            {
                "module_number": 3,
                "title": "Foundry",
                "topics": [
                    "Introduction to foundry, pattern, pattern allowances",
                    "Ingredients of moulding sand, melting furnaces",
                    "Foundry tools and their purposes",
                    "Demo of mould preparation, preparation of mould as a job"
                ]
            },
            {
                "module_number": 4,
                "title": "Smithy",
                "topics": [
                    "Forging, hot working and cold working",
                    "Smithy tools",
                    "Preparation of a job"
                ]
            }
        ]
    },
    {
        "branch": "Computer Science & Engineering",
        "semester": 2,
        "subject_name": "Mathematics - II",
        "modules": [
            {
                "module_number": 1,
                "title": "Integral Calculus",
                "topics": [
                    "Reduction formula for integrals",
                    "Convergence of improper integrals",
                    "Beta and Gamma function",
                    "Differentiation under the sign of integration",
                    "Application of integrals (Arc length, Area, Volume, Surface area of revolution)"
                ]
            },
            {
                "module_number": 2,
                "title": "Multiple Integrals",
                "topics": [
                    "Double and triple integrals",
                    "Evaluation of double integrals",
                    "Change of order of integration",
                    "Change of variables",
                    "Evaluation of triple integrals",
                    "Determination of volume and Centre of gravity using double and triple integrals",
                    "Dirichlet's integrals"
                ]
            },
            {
                "module_number": 3,
                "title": "Differential Equations",
                "topics": [
                    "Differential equation of 1st order and 1st degree",
                    "Linear differential equation of Second order with Constant and variable coefficients",
                    "Complementary function and particular integrals",
                    "Method of variation of parameters",
                    "Cauchy's and Legendre's equations",
                    "Simultaneous linear equations with Constant coefficients"
                ]
            },
            {
                "module_number": 4,
                "title": "Matrices",
                "topics": [
                    "Rank of matrix",
                    "Linear Independence/dependence of vectors",
                    "Consistency and solution of system of linear equations by rank method",
                    "Eigenvalues and Eigenvectors",
                    "Cayley-Hamilton's Theorem",
                    "Diagonalization of a square matrix"
                ]
            }
        ]
    },
    {
        "branch": "Computer Science & Engineering",
        "semester": 2,
        "subject_name": "Engineering Mechanics",
        "modules": [
            {
                "module_number": 1,
                "title": "Various Systems of Forces",
                "topics": [
                    "Statically Equivalent Force systems",
                    "Simplest Equivalent of a system of forces using vector methods"
                ]
            },
            {
                "module_number": 2,
                "title": "Equilibrium",
                "topics": [
                    "Free Body Diagram",
                    "Equations of equilibrium and their applications to various system of forces",
                    "Plane Trusses and frames"
                ]
            },
            {
                "module_number": 3,
                "title": "Friction",
                "topics": [
                    "Friction on dry surfaces",
                    "Static, Kinetic and rolling friction",
                    "Applications to inclined planes, Wedges and blocks"
                ]
            },
            {
                "module_number": 4,
                "title": "Kinematics and Kinetics of a Particle",
                "topics": [
                    "Rectilinear and curvilinear translations",
                    "Normal and tangential components of acceleration",
                    "Radial and transverse components of acceleration"
                ]
            },
            {
                "module_number": 5,
                "title": "Kinematics and Kinetics of Rigid Bodies in Plane Motion",
                "topics": [
                    "Angular velocity and angular acceleration",
                    "Effective Forces on a rigid body",
                    "D'Alembert's Principle",
                    "Rotation of Rigid bodies",
                    "Rolling motion & Plane motion of rigid bodies"
                ]
            },
            {
                "module_number": 6,
                "title": "Impulse and Momentum",
                "topics": [
                    "Principle of impulse and momentum",
                    "Linear impulse and linear momentum",
                    "Angular impulse and angular momentum",
                    "Impact of elastic bodies"
                ]
            },
            {
                "module_number": 7,
                "title": "Work, Energy and Power",
                "topics": [
                    "Work done by forces and couples",
                    "Potential, Elastic and kinetic energy",
                    "Work-energy theorem",
                    "Work-energy analysis",
                    "Conservation of energy",
                    "Concept of Power and efficiency"
                ]
            },
            {
                "module_number": 8,
                "title": "Centroid and Moment of Inertia",
                "topics": [
                    "Centroid and M.I. of area",
                    "Radius of gyration",
                    "Parallel axis and perpendicular axis theorem"
                ]
            }
        ]
    }
];

const eceSem2Data = [
    {
        "branch": "Electronics & Communication Engineering",
        "semester": 2,
        "subject_name": "Mathematics - II",
        "modules": [
            {
                "module_number": 1,
                "title": "Integral Calculus",
                "topics": [
                    "Reduction formula for integrals",
                    "Convergence of improper integrals",
                    "Beta and Gamma function",
                    "Differentiation under the sign of integration",
                    "Application of integrals (Arc length, Area, Volume, Surface area of revolution)"
                ]
            },
            {
                "module_number": 2,
                "title": "Multiple Integrals",
                "topics": [
                    "Double and triple integrals",
                    "Evaluation of double integrals",
                    "Change of order of integration",
                    "Change of variables",
                    "Evaluation of triple integrals",
                    "Determination of volume and Centre of gravity using double and triple integrals",
                    "Dirichlet's integrals"
                ]
            },
            {
                "module_number": 3,
                "title": "Differential Equations",
                "topics": [
                    "Differential equation of 1st order and 1st degree",
                    "Linear differential equation of Second order with Constant and variable coefficients",
                    "Complementary function and particular integrals",
                    "Method of variation of parameters",
                    "Cauchy's and Legendre's equations",
                    "Simultaneous linear equations with Constant coefficients"
                ]
            },
            {
                "module_number": 4,
                "title": "Matrices",
                "topics": [
                    "Rank of matrix",
                    "Linear Independence/dependence of vectors",
                    "Consistency and solution of system of linear equations by rank method",
                    "Eigenvalues and Eigenvectors",
                    "Cayley-Hamilton's Theorem",
                    "Diagonalization of a square matrix"
                ]
            }
        ]
    },
    {
        "branch": "Electronics & Communication Engineering",
        "semester": 2,
        "subject_name": "Chemistry",
        "modules": [
            {
                "module_number": 1,
                "title": "Quantum Mechanics",
                "topics": [
                    "Schrodinger Wave Equation",
                    "Particle in one dimensional box",
                    "Illustrating energy quantization"
                ]
            },
            {
                "module_number": 2,
                "title": "Thermodynamics",
                "topics": [
                    "Laws of Thermodynamics",
                    "Entropy Concept",
                    "Chemical potential"
                ]
            },
            {
                "module_number": 3,
                "title": "Electrochemistry",
                "topics": [
                    "Concepts of electrode potentials",
                    "Nernst Equation",
                    "Reference Electrode",
                    "Chemistry of Secondary cells (e.g. Lead-acid or Ni-Cd cells)",
                    "Corrosion & its Prevention",
                    "Electrochemical theory of corrosion",
                    "Types of corrosion",
                    "Corrosion prevention & its control"
                ]
            },
            {
                "module_number": 4,
                "title": "Chemical Kinetics / Reaction Dynamics",
                "topics": [
                    "Rate laws",
                    "First order & Second order of reaction",
                    "Reversible first order reaction"
                ]
            },
            {
                "module_number": 5,
                "title": "Stereochemistry and Organic Reactions",
                "topics": [
                    "Concept of chirality, enantiomers/diastereoisomers",
                    "Centre & axis of chirality",
                    "Optical purity",
                    "Relative & absolute configurations (R-S & E-Z notations)",
                    "Geometrical isomers",
                    "Hofman reaction",
                    "Riemer-Tieman reaction",
                    "Diels Alder reaction",
                    "Cannizaro reaction",
                    "Skraup synthesis",
                    "Perkin Condensation",
                    "Aldol Condensation"
                ]
            },
            {
                "module_number": 6,
                "title": "Polymers",
                "topics": [
                    "Concept of polymerization",
                    "Types of Polymers",
                    "Mechanism of anionic/cationic/free radical polymerization",
                    "Commercial polymers & their uses (Nylon, PE, PP, ABS, BUNA-S, BUNA-N)"
                ]
            },
            {
                "module_number": 7,
                "title": "Coordination Chemistry",
                "topics": [
                    "Nomenclature of complexes",
                    "Isomerism",
                    "Valence Bond Theory",
                    "Crystal Field Theory",
                    "Molecular orbital theory of Homo nuclear & hetero nuclear diatomic Molecules"
                ]
            }
        ]
    },
    {
        "branch": "Electronics & Communication Engineering",
        "semester": 2,
        "subject_name": "English for Communication",
        "modules": [
            {
                "module_number": 1,
                "title": "Grammar Principles and Vocabulary Building",
                "topics": [
                    "Exposure to basics of grammar",
                    "Parts of speech",
                    "Tenses",
                    "Active and passive voice",
                    "Reported speech",
                    "Idioms and Phrases",
                    "Vocabulary development through prefixes, suffixes and word roots"
                ]
            },
            {
                "module_number": 2,
                "title": "Effective Sentence Construction",
                "topics": [
                    "Clarity and precision in construction",
                    "Strategies for effectiveness in writing"
                ]
            },
            {
                "module_number": 3,
                "title": "Paragraphs",
                "topics": [
                    "Definition and structure",
                    "Types and Composition",
                    "Unity of theme",
                    "Coherence and organization patterns"
                ]
            },
            {
                "module_number": 4,
                "title": "Note-making",
                "topics": [
                    "Uses and steps in note-making",
                    "Identification of important points",
                    "Reduction to phrases",
                    "Selection of suitable note format",
                    "Types of notes: tree diagram, block list, table"
                ]
            },
            {
                "module_number": 5,
                "title": "Letter Writing",
                "topics": [
                    "Business, Official and Informal letters",
                    "Communicative purpose and strategy",
                    "Letter format and mechanics",
                    "Letters of request, complaint and invitation"
                ]
            },
            {
                "module_number": 6,
                "title": "Reading Techniques",
                "topics": [
                    "Skimming and Scanning",
                    "Quick reading for gist",
                    "Suggesting titles",
                    "Looking for specific information"
                ]
            },
            {
                "module_number": 7,
                "title": "Description of Graphics",
                "topics": [
                    "Kinds of graphs",
                    "Construction and use",
                    "Application in scientific texts",
                    "Interpretation of graphs using expressions of comparison and contrast"
                ]
            },
            {
                "module_number": 8,
                "title": "Reading Comprehension",
                "topics": [
                    "Reading to retrieve information",
                    "Techniques of comprehension",
                    "Finding clues to locate important points",
                    "Answering objective type questions (inference, elimination)"
                ]
            },
            {
                "module_number": 9,
                "title": "Technical Report-Writing",
                "topics": [
                    "Kinds of reports: proposals, progress and final reports",
                    "Structure and features",
                    "Process of writing a report",
                    "Editing"
                ]
            },
            {
                "module_number": 10,
                "title": "Book Reviews",
                "topics": [
                    "Oral and written review of a chosen novel/play",
                    "Brief written analysis including summary and appreciation",
                    "Oral presentation of the novel before class"
                ]
            }
        ]
    },
    {
        "branch": "Electronics & Communication Engineering",
        "semester": 2,
        "subject_name": "Computer Programming & Data Structure",
        "modules": [
            {
                "module_number": 1,
                "title": "Computer Fundamental & Programming in C",
                "topics": [
                    "History, Generations, Characteristic and Applications of Computers",
                    "Computer Languages, Types of Software",
                    "Introduction to C: Variables, Operators, Statements, Conditions",
                    "Looping and decision making (if, else, for, while, do-while, Switch Case, goto)"
                ]
            },
            {
                "module_number": 2,
                "title": "Functions",
                "topics": [
                    "Definition, Declaration, Calling",
                    "Passing arguments, Reference arguments",
                    "Variables and storage classes"
                ]
            },
            {
                "module_number": 3,
                "title": "Arrays & Structures",
                "topics": [
                    "Arrays: Introduction, Representation, Initialization & Accessing of 1D, 2D and Multi dimensional Arrays",
                    "Structures: Specifying the structure, Defining structure Variables, Accessing structure members, Structures within structure"
                ]
            },
            {
                "module_number": 4,
                "title": "Pointers",
                "topics": [
                    "Address and Pointers",
                    "Pointers and Arrays",
                    "Pointers and Functions"
                ]
            },
            {
                "module_number": 5,
                "title": "File Handling",
                "topics": [
                    "Introduction, Defining and opening a file",
                    "Closing a file",
                    "Input/Output operations on Files"
                ]
            },
            {
                "module_number": 6,
                "title": "Introduction to Object Oriented Programming Concepts",
                "topics": [
                    "Difference between structured and OOPS concept",
                    "Advantages of OOPS",
                    "Object and classes: Simple classes, Constructors, Destructors",
                    "Object as function Arguments",
                    "Inheritance: Definition, Types, use of public, protected, private keywords",
                    "Polymorphism: Definition, Function Overloading, Operator Overloading"
                ]
            },
            {
                "module_number": 7,
                "title": "Basics Of Data Structure",
                "topics": [
                    "Introduction & Classification of Data Structure",
                    "Introduction to Linear & Non-linear Data Structures",
                    "Arrays, Stacks, Queues, Linked Lists, Tree & Graph"
                ]
            }
        ]
    },
    {
        "branch": "Electronics & Communication Engineering",
        "semester": 2,
        "subject_name": "Engineering Drawing",
        "modules": [
            {
                "module_number": 1,
                "title": "Introduction of Engineering Graphics",
                "topics": [
                    "Need of engineering graphics",
                    "Lettering and dimensioning",
                    "Types of lines",
                    "Scale preparation"
                ]
            },
            {
                "module_number": 2,
                "title": "Projection of Point and Straight Lines",
                "topics": [
                    "One plate projection"
                ]
            },
            {
                "module_number": 3,
                "title": "Projection of Solids",
                "topics": [
                    "One plate projection"
                ]
            },
            {
                "module_number": 4,
                "title": "Section of Solids",
                "topics": [
                    "One plate projection"
                ]
            },
            {
                "module_number": 5,
                "title": "Intersection of Solids",
                "topics": [
                    "One plate projection"
                ]
            },
            {
                "module_number": 6,
                "title": "Development of Surfaces",
                "topics": [
                    "One plate projection"
                ]
            },
            {
                "module_number": 7,
                "title": "Orthographic Projection",
                "topics": [
                    "One plate projection"
                ]
            },
            {
                "module_number": 8,
                "title": "Isometric Projections",
                "topics": [
                    "Isometric scale",
                    "One plate projection"
                ]
            }
        ]
    }
];

const meSem2Data = [
    {
        "branch": "Mechanical Engineering",
        "semester": 2,
        "subject_name": "Mathematics - II",
        "modules": [
            {
                "module_number": 1,
                "title": "Integral Calculus",
                "topics": [
                    "Reduction formula for integrals",
                    "Convergence of improper integrals",
                    "Beta and Gamma function",
                    "Differentiation under the sign of integration",
                    "Application of integrals (Arc length, Area, Volume, Surface area of revolution)"
                ]
            },
            {
                "module_number": 2,
                "title": "Multiple Integrals",
                "topics": [
                    "Double and triple integrals",
                    "Evaluation of double integrals",
                    "Change of order of integration",
                    "Change of variables",
                    "Evaluation of triple integrals",
                    "Determination of volume and Centre of gravity using double and triple integrals",
                    "Dirichlet's integrals"
                ]
            },
            {
                "module_number": 3,
                "title": "Differential Equations",
                "topics": [
                    "Differential equation of 1st order and 1st degree",
                    "Linear differential equation of Second order with Constant and variable coefficients",
                    "Complementary function and particular integrals",
                    "Method of variation of parameters",
                    "Cauchy's and Legendre's equations",
                    "Simultaneous linear equations with Constant coefficients"
                ]
            },
            {
                "module_number": 4,
                "title": "Matrices",
                "topics": [
                    "Rank of matrix",
                    "Linear Independence/dependence of vectors",
                    "Consistency and solution of system of linear equations by rank method",
                    "Eigenvalues and Eigenvectors",
                    "Cayley-Hamilton's Theorem",
                    "Diagonalization of a square matrix"
                ]
            }
        ]
    },
    {
        "branch": "Mechanical Engineering",
        "semester": 2,
        "subject_name": "Chemistry",
        "modules": [
            {
                "module_number": 1,
                "title": "Quantum Mechanics",
                "topics": [
                    "Schrodinger Wave Equation",
                    "Particle in one dimensional box",
                    "Illustrating energy quantization"
                ]
            },
            {
                "module_number": 2,
                "title": "Thermodynamics",
                "topics": [
                    "Laws of Thermodynamics",
                    "Entropy Concept",
                    "Chemical potential"
                ]
            },
            {
                "module_number": 3,
                "title": "Electrochemistry",
                "topics": [
                    "Concepts of electrode potentials",
                    "Nernst Equation",
                    "Reference Electrode",
                    "Chemistry of Secondary cells (e.g. Lead-acid or Ni-Cd cells)",
                    "Corrosion & its Prevention",
                    "Electrochemical theory of corrosion",
                    "Types of corrosion",
                    "Corrosion prevention & its control"
                ]
            },
            {
                "module_number": 4,
                "title": "Chemical Kinetics / Reaction Dynamics",
                "topics": [
                    "Rate laws",
                    "First order & Second order of reaction",
                    "Reversible first order reaction"
                ]
            },
            {
                "module_number": 5,
                "title": "Stereochemistry and Organic Reactions",
                "topics": [
                    "Concept of chirality, enantiomers/diastereoisomers",
                    "Centre & axis of chirality",
                    "Optical purity",
                    "Relative & absolute configurations (R-S & E-Z notations)",
                    "Geometrical isomers",
                    "Hofman reaction",
                    "Riemer-Tieman reaction",
                    "Diels Alder reaction",
                    "Cannizaro reaction",
                    "Skraup synthesis",
                    "Perkin Condensation",
                    "Aldol Condensation"
                ]
            },
            {
                "module_number": 6,
                "title": "Polymers",
                "topics": [
                    "Concept of polymerization",
                    "Types of Polymers",
                    "Mechanism of anionic/cationic/free radical polymerization",
                    "Commercial polymers & their uses (Nylon, PE, PP, ABS, BUNA-S, BUNA-N)"
                ]
            },
            {
                "module_number": 7,
                "title": "Coordination Chemistry",
                "topics": [
                    "Nomenclature of complexes",
                    "Isomerism",
                    "Valence Bond Theory",
                    "Crystal Field Theory",
                    "Molecular orbital theory of Homo nuclear & hetero nuclear diatomic Molecules"
                ]
            }
        ]
    },
    {
        "branch": "Mechanical Engineering",
        "semester": 2,
        "subject_name": "English for Communication",
        "modules": [
            {
                "module_number": 1,
                "title": "Grammar Principles and Vocabulary Building",
                "topics": [
                    "Exposure to basics of grammar",
                    "Parts of speech",
                    "Tenses",
                    "Active and passive voice",
                    "Reported speech",
                    "Idioms and Phrases",
                    "Vocabulary development through prefixes, suffixes and word roots"
                ]
            },
            {
                "module_number": 2,
                "title": "Effective Sentence Construction",
                "topics": [
                    "Clarity and precision in construction",
                    "Strategies for effectiveness in writing"
                ]
            },
            {
                "module_number": 3,
                "title": "Paragraphs",
                "topics": [
                    "Definition and structure",
                    "Types and Composition",
                    "Unity of theme",
                    "Coherence and organization patterns"
                ]
            },
            {
                "module_number": 4,
                "title": "Note-making",
                "topics": [
                    "Uses and steps in note-making",
                    "Identification of important points",
                    "Reduction to phrases",
                    "Selection of suitable note format",
                    "Types of notes: tree diagram, block list, table"
                ]
            },
            {
                "module_number": 5,
                "title": "Letter Writing",
                "topics": [
                    "Business, Official and Informal letters",
                    "Communicative purpose and strategy",
                    "Letter format and mechanics",
                    "Letters of request, complaint and invitation"
                ]
            },
            {
                "module_number": 6,
                "title": "Reading Techniques",
                "topics": [
                    "Skimming and Scanning",
                    "Quick reading for gist",
                    "Suggesting titles",
                    "Looking for specific information"
                ]
            },
            {
                "module_number": 7,
                "title": "Description of Graphics",
                "topics": [
                    "Kinds of graphs",
                    "Construction and use",
                    "Application in scientific texts",
                    "Interpretation of graphs using expressions of comparison and contrast"
                ]
            },
            {
                "module_number": 8,
                "title": "Reading Comprehension",
                "topics": [
                    "Reading to retrieve information",
                    "Techniques of comprehension",
                    "Finding clues to locate important points",
                    "Answering objective type questions (inference, elimination)"
                ]
            },
            {
                "module_number": 9,
                "title": "Technical Report-Writing",
                "topics": [
                    "Kinds of reports: proposals, progress and final reports",
                    "Structure and features",
                    "Process of writing a report",
                    "Editing"
                ]
            },
            {
                "module_number": 10,
                "title": "Book Reviews",
                "topics": [
                    "Oral and written review of a chosen novel/play",
                    "Brief written analysis including summary and appreciation",
                    "Oral presentation of the novel before class"
                ]
            }
        ]
    },
    {
        "branch": "Mechanical Engineering",
        "semester": 2,
        "subject_name": "Computer Programming & Data Structure",
        "modules": [
            {
                "module_number": 1,
                "title": "Computer Fundamental & Programming in C",
                "topics": [
                    "History, Generations, Characteristic and Applications of Computers",
                    "Computer Languages, Types of Software",
                    "Introduction to C: Variables, Operators, Statements, Conditions",
                    "Looping and decision making (if, else, for, while, do-while, Switch Case, goto)"
                ]
            },
            {
                "module_number": 2,
                "title": "Functions",
                "topics": [
                    "Definition, Declaration, Calling",
                    "Passing arguments, Reference arguments",
                    "Variables and storage classes"
                ]
            },
            {
                "module_number": 3,
                "title": "Arrays & Structures",
                "topics": [
                    "Arrays: Introduction, Representation, Initialization & Accessing of 1D, 2D and Multi dimensional Arrays",
                    "Structures: Specifying the structure, Defining structure Variables, Accessing structure members, Structures within structure"
                ]
            },
            {
                "module_number": 4,
                "title": "Pointers",
                "topics": [
                    "Address and Pointers",
                    "Pointers and Arrays",
                    "Pointers and Functions"
                ]
            },
            {
                "module_number": 5,
                "title": "File Handling",
                "topics": [
                    "Introduction, Defining and opening a file",
                    "Closing a file",
                    "Input/Output operations on Files"
                ]
            },
            {
                "module_number": 6,
                "title": "Introduction to Object Oriented Programming Concepts",
                "topics": [
                    "Difference between structured and OOPS concept",
                    "Advantages of OOPS",
                    "Object and classes: Simple classes, Constructors, Destructors",
                    "Object as function Arguments",
                    "Inheritance: Definition, Types, use of public, protected, private keywords",
                    "Polymorphism: Definition, Function Overloading, Operator Overloading"
                ]
            },
            {
                "module_number": 7,
                "title": "Basics Of Data Structure",
                "topics": [
                    "Introduction & Classification of Data Structure",
                    "Introduction to Linear & Non-linear Data Structures",
                    "Arrays, Stacks, Queues, Linked Lists, Tree & Graph"
                ]
            }
        ]
    },
    {
        "branch": "Mechanical Engineering",
        "semester": 2,
        "subject_name": "Engineering Drawing",
        "modules": [
            {
                "module_number": 1,
                "title": "Introduction of Engineering Graphics",
                "topics": [
                    "Need of engineering graphics",
                    "Lettering and dimensioning",
                    "Types of lines",
                    "Scale preparation"
                ]
            },
            {
                "module_number": 2,
                "title": "Projection of Point and Straight Lines",
                "topics": [
                    "One plate projection"
                ]
            },
            {
                "module_number": 3,
                "title": "Projection of Solids",
                "topics": [
                    "One plate projection"
                ]
            },
            {
                "module_number": 4,
                "title": "Section of Solids",
                "topics": [
                    "One plate projection"
                ]
            },
            {
                "module_number": 5,
                "title": "Intersection of Solids",
                "topics": [
                    "One plate projection"
                ]
            },
            {
                "module_number": 6,
                "title": "Development of Surfaces",
                "topics": [
                    "One plate projection"
                ]
            },
            {
                "module_number": 7,
                "title": "Orthographic Projection",
                "topics": [
                    "One plate projection"
                ]
            },
            {
                "module_number": 8,
                "title": "Isometric Projections",
                "topics": [
                    "Isometric scale",
                    "One plate projection"
                ]
            }
        ]
    }
];

const cseSem3Data = [
    {
        "branch": "Computer Science & Engineering",
        "semester": 3,
        "subject_name": "Data Structures and Algorithms",
        "modules": [
            {
                "module_number": 1,
                "title": "Basic Concepts",
                "topics": [
                    "Data Structures and physical structures",
                    "Algorithm Specification and Introduction",
                    "Recursive algorithms",
                    "Data Abstraction",
                    "Performance analysis (time and space complexity)",
                    "Asymptotic Notation (Big O, Omega, Theta)",
                    "Introduction to Linear and Non Linear data structures"
                ]
            },
            {
                "module_number": 2,
                "title": "Arrays, Linked Lists and Stacks/Queues",
                "topics": [
                    "Representation of single and two dimensional arrays",
                    "Sparse matrices (array and linked Representation)",
                    "Singly Linked Lists and Operations",
                    "Circularly linked lists and Operations",
                    "Doubly Linked Lists and Operations",
                    "Stack ADT (array and linked implementations)",
                    "Infix to postfix conversion and Postfix expression evaluation",
                    "Recursion implementation",
                    "Queue ADT (array and linked Implementations)",
                    "Circular queues"
                ]
            },
            {
                "module_number": 3,
                "title": "Trees",
                "topics": [
                    "Introduction to Trees and Binary trees",
                    "Properties of Binary Trees",
                    "Binary Tree ADT and representations (array/linked)",
                    "Binary Tree traversals",
                    "Threaded binary trees",
                    "Priority Queues and applications",
                    "Max Priority Queue ADT",
                    "Max Heaps and operations"
                ]
            },
            {
                "module_number": 4,
                "title": "Searching and Sorting",
                "topics": [
                    "Linear Search and Binary Search",
                    "Hashing (Hash tables, functions, Overflow Handling)",
                    "Sorting methods: Insertion Sort, Selection Sort, Radix Sort, Quick sort, Heap Sort, Merge sort",
                    "Comparison of Searching and Sorting methods"
                ]
            },
            {
                "module_number": 5,
                "title": "Graphs and Search Trees",
                "topics": [
                    "Graphs: Definitions, Terminology, Applications",
                    "Graph Representations (Adjacency matrix, Adjacency lists)",
                    "Graph Search methods (DFS and BFS)",
                    "Binary Search Tree ADT (Searching, Insertion, Deletion)",
                    "Balanced search trees: AVL Trees",
                    "B-Trees (Definition and Examples)",
                    "Red-Black Trees",
                    "Comparison of Search Trees"
                ]
            }
        ]
    },
    {
        "branch": "Computer Science & Engineering",
        "semester": 3,
        "subject_name": "Digital Logic Design",
        "modules": [
            {
                "module_number": 1,
                "title": "Digital Systems and Binary Numbers",
                "topics": [
                    "Number base conversions (Octal, Hexadecimal)",
                    "Complements and signed binary numbers",
                    "Floating point number representation",
                    "Binary codes, Error detection and correction",
                    "Boolean algebra and logic gates",
                    "Basic theorems, properties, and canonical forms"
                ]
            },
            {
                "module_number": 2,
                "title": "Gate-Level Minimization",
                "topics": [
                    "The K-Map Method (Three, Four, Five Variable Maps)",
                    "Sum of products and product of sums simplification",
                    "Don't care conditions",
                    "NAND and NOR implementation",
                    "Exclusive-OR function"
                ]
            },
            {
                "module_number": 3,
                "title": "Combinational Circuits",
                "topics": [
                    "Analysis and Design Procedure",
                    "Code converters",
                    "Binary Adder-Subtractor and Decimal Adder",
                    "Binary Multiplier",
                    "Magnitude Comparator",
                    "Decoders, Encoders, Multiplexers, Demultiplexers"
                ]
            },
            {
                "module_number": 4,
                "title": "Sequential Circuits",
                "topics": [
                    "Synchronous Sequential Circuits (Latches, Flip-flops)",
                    "Registers, Shift registers, Ripple counters, Synchronous counters",
                    "Asynchronous Sequential Circuits (Analysis, Circuits with latches)",
                    "Race-free state assignment and Hazards"
                ]
            },
            {
                "module_number": 5,
                "title": "Memory and Microoperations",
                "topics": [
                    "Random-Access memory and Memory decoding",
                    "ROM, Programmable Logic Array, Programmable Array Logic",
                    "Register Transfer Language and Bus/Memory Transfers",
                    "Arithmetic, Logic, and Shift Microoperations"
                ]
            }
        ]
    },
    {
        "branch": "Computer Science & Engineering",
        "semester": 3,
        "subject_name": "Formal Languages and Automata Theory",
        "modules": [
            {
                "module_number": 1,
                "title": "The Theory of Automata",
                "topics": [
                    "Finite automata as language acceptor and translator",
                    "Deterministic (DFA) and Non-deterministic (NFA) finite automata",
                    "Finite automata with output (Mealy and Moore Machine)",
                    "Finite automata with E-moves",
                    "Conversion of NFA to DFA",
                    "Minimizing number of states of a DFA"
                ]
            },
            {
                "module_number": 2,
                "title": "Regular Expressions",
                "topics": [
                    "Regular expression properties",
                    "Finite automata and Regular expressions",
                    "Regular Expression to DFA conversion",
                    "Pumping lemma and its application",
                    "Regular sets and Regular grammar",
                    "Closure properties of regular sets"
                ]
            },
            {
                "module_number": 3,
                "title": "Grammars",
                "topics": [
                    "Chomsky hierarchy of grammar",
                    "Context free grammar (CFG)",
                    "Left most & right most derivation trees",
                    "Ambiguity in grammar",
                    "Simplification of CFG",
                    "Chomsky normal form and Greibach normal form"
                ]
            },
            {
                "module_number": 4,
                "title": "Push Down Automata and Turing Machine",
                "topics": [
                    "Deterministic and non-deterministic PDA",
                    "Acceptance of push down automata",
                    "Turing machine model and construction",
                    "Universal Turing machine",
                    "Halting problem of Turing Machine",
                    "Post correspondence problem"
                ]
            },
            {
                "module_number": 5,
                "title": "Computability",
                "topics": [
                    "Recursive and Partial recursive functions",
                    "Turing computable functions",
                    "Recursive enumerable language and sets",
                    "Initial functions and computability"
                ]
            }
        ]
    },
    {
        "branch": "Computer Science & Engineering",
        "semester": 3,
        "subject_name": "Mathematics - III",
        "modules": [
            {
                "module_number": 1,
                "title": "Laplace Transform",
                "topics": [
                    "Laplace Transformation and its applications",
                    "Inverse Laplace Transformation",
                    "Convolution Theorem",
                    "Solution of ODE by Laplace Transformation"
                ]
            },
            {
                "module_number": 2,
                "title": "Fourier Transform",
                "topics": [
                    "Complex form of Fourier series",
                    "Fourier transformation and inverse transforms",
                    "Sine, cosine transformations and inverse transforms",
                    "Simple illustrations"
                ]
            },
            {
                "module_number": 3,
                "title": "Z-transforms",
                "topics": [
                    "Inverse Z-transforms",
                    "Properties",
                    "Initial and final value theorems",
                    "Convolution theorem",
                    "Difference equations",
                    "Solution of difference equations using z-transforms"
                ]
            },
            {
                "module_number": 4,
                "title": "Partial Differential Equations",
                "topics": [
                    "Solutions of Wave equation, Heat equation and Laplace's equation by the method of separation of variables and their applications",
                    "Solution of PDE by Laplace transformation"
                ]
            },
            {
                "module_number": 5,
                "title": "Complex Variables",
                "topics": [
                    "Analytic function",
                    "Cauchy Riemann equations",
                    "Harmonic functions",
                    "Conjugate functions",
                    "Complex Integration - line integrals in complex plane",
                    "Cauchy's theorem",
                    "Cauchy's integral formula",
                    "Taylor's and Laurent's series expansions",
                    "Zeros and singularities",
                    "Residues, residue theorem",
                    "Evaluation of real integrals using residue theorem",
                    "Bilinear transformations",
                    "Conformal mapping"
                ]
            }
        ]
    },
    {
        "branch": "Computer Science & Engineering",
        "semester": 3,
        "subject_name": "Basic Electronics",
        "modules": [
            {
                "module_number": 1,
                "title": "Introduction to Semiconductors & Diodes",
                "topics": [
                    "Introduction to semiconductor, Formation of P-N junction, Energy band diagram",
                    "Built in potential, Forward and Reverse biased P-N junction",
                    "Formation of depletion zone, V-I characteristics",
                    "Zener breakdown, Avalanche breakdown and its reverse characteristics",
                    "Junction capacitance and varactor Diode",
                    "Simple diode circuits, Load line, Linear piecewise model",
                    "Rectifiers: Half wave and Full wave (PIV, DC voltage/current, ripple factor, Efficiency)",
                    "Clipper and Clamper circuits",
                    "Zener diode and regulator circuits"
                ]
            },
            {
                "module_number": 2,
                "title": "Introduction to Bipolar Junction Transistors (BJT)",
                "topics": [
                    "Formation of PNP/NPN junctions, Energy band diagram",
                    "Transistor mechanism and principle of transistors",
                    "CE, CB, CC configuration",
                    "Ebers Moll model of transistor",
                    "Transistor characteristics: Cutoff, Active and Saturation",
                    "Transistor low frequency (Hybrid) model",
                    "Calculation of current gain, voltage gain, input impedance and output impedance",
                    "Types of Biasing: self bias, Collector to Base bias, Fixed bias and Voltage divider bias (advantages/disadvantages)"
                ]
            },
            {
                "module_number": 3,
                "title": "Field Effect Transistors (FET)",
                "topics": [
                    "Introduction to FETs",
                    "Construction and Characteristics of JFET (N channel only)",
                    "Transfer characteristics (N channel only)",
                    "Construction and characteristics of MOSFET (N channel only)",
                    "Depletion and Enhancement type",
                    "Brief introduction to CS, CG, CD Configuration"
                ]
            },
            {
                "module_number": 4,
                "title": "Feedback Amplifiers",
                "topics": [
                    "Concept (Block Diagram): open loop and Closed loop",
                    "Positive and Negative feedback",
                    "Loop gain, Open loop gain, feedback factors",
                    "Topologies of feedback amplifiers",
                    "Effect of feedback on gain, output/input impedance, sensitivities (qualitative), Band width stability",
                    "Effect of positive feedback, instability and oscillation",
                    "Condition of oscillations: Barkhausen's criteria"
                ]
            },
            {
                "module_number": 5,
                "title": "Operational Amplifier",
                "topics": [
                    "Introduction to operational amplifiers and its ideal characteristics",
                    "Concept of virtual ground",
                    "Inverting and non inverting modes of operation",
                    "Applications: Voltage Summing, Difference, Constant gain multiplier, Voltage follower, Comparator, Integrator, Differentiator"
                ]
            },
            {
                "module_number": 6,
                "title": "Special Semiconductor Devices",
                "topics": [
                    "Silicon controlled rectifiers (SCR): constructional features, physical operation, Characteristics",
                    "Concept of TRIAC and DIAC",
                    "Insulated gate bipolar transistors (IGBT)",
                    "UJT (simple application saw tooth generator)"
                ]
            }
        ]
    },
    {
        "branch": "Computer Science & Engineering",
        "semester": 3,
        "subject_name": "Biology",
        "modules": [
            {
                "module_number": 1,
                "title": "Introduction",
                "topics": [
                    "Comparison of biological and engineering systems (Eye vs Camera, Bird vs Aircraft)",
                    "Biological observations leading to major discoveries (Brownian motion, Thermodynamics)",
                    "Importance of biology as a scientific discipline"
                ]
            },
            {
                "module_number": 2,
                "title": "Classification",
                "topics": [
                    "Hierarchy of life forms",
                    "Classification based on cellularity, ultrastructure, and energy utilization",
                    "Model organisms (E. coli, S. cerevisiae, D. melanogaster, C. elegans, A. thaliana, M. musculus)"
                ]
            },
            {
                "module_number": 3,
                "title": "Genetics",
                "topics": [
                    "Mendel's laws of segregation and independent assortment",
                    "Concept of allele, gene mapping, and gene interaction",
                    "Meiosis and Mitosis",
                    "Concepts of recessiveness, dominance, and phenotype mapping",
                    "Single gene disorders in humans"
                ]
            },
            {
                "module_number": 4,
                "title": "Biomolecules",
                "topics": [
                    "Monomeric units and polymeric structures",
                    "Sugars, starch, and cellulose",
                    "Amino acids and proteins",
                    "Nucleotides and DNA/RNA",
                    "Lipids and two-carbon units"
                ]
            },
            {
                "module_number": 5,
                "title": "Enzymes",
                "topics": [
                    "Enzyme classification and mechanism of action",
                    "Enzyme kinetics and kinetic parameters",
                    "RNA catalysis"
                ]
            },
            {
                "module_number": 6,
                "title": "Information Transfer",
                "topics": [
                    "DNA as genetic material",
                    "Hierarchy of DNA structure (double helix to nucleosomes)",
                    "Genetic code: Universality and degeneracy",
                    "Definition of gene (complementation and recombination)"
                ]
            },
            {
                "module_number": 7,
                "title": "Macromolecular Analysis",
                "topics": [
                    "Protein structure hierarchy (Primary, secondary, tertiary, quaternary)",
                    "Proteins as enzymes, transporters, receptors, and structural elements"
                ]
            },
            {
                "module_number": 8,
                "title": "Metabolism",
                "topics": [
                    "Thermodynamics in biological systems (Exothermic/Endothermic)",
                    "ATP as energy currency",
                    "Glycolysis and Krebs cycle (Breakdown of glucose)",
                    "Photosynthesis (Synthesis of glucose)"
                ]
            },
            {
                "module_number": 9,
                "title": "Microbiology",
                "topics": [
                    "Concept of single-celled organisms (Species and strains)",
                    "Microscopy and ecological aspects",
                    "Growth kinetics and sterilization"
                ]
            }
        ]
    }
];

const eceSem3Data = [
    {
        "branch": "Electronics & Communication Engineering",
        "semester": 3,
        "subject_name": "Mathematics-III",
        "modules": [
            {
                "module_number": 1,
                "title": "Laplace Transform",
                "topics": ["Laplace Transformation and applications", "Inverse Laplace Transformation", "Convolution Theorem", "Solution of ODE by Laplace Transformation"]
            },
            {
                "module_number": 2,
                "title": "Fourier Transform",
                "topics": ["Complex form of Fourier series", "Fourier transformation and inverse transforms", "Sine and cosine transformations"]
            },
            {
                "module_number": 3,
                "title": "Z-transforms",
                "topics": ["Inverse Z-transforms", "Initial and final value theorems", "Convolution theorem", "Solution of difference equations using z-transforms"]
            },
            {
                "module_number": 4,
                "title": "Partial Differential Equations",
                "topics": ["Solutions of Wave equation, Heat equation, Laplace's equation", "Method of separation of variables", "Solution of PDE by Laplace transformation"]
            },
            {
                "module_number": 5,
                "title": "Complex Variables",
                "topics": ["Analytic function, Cauchy Riemann equations", "Complex Integration, Cauchy's theorem", "Taylor's and Laurent's series", "Residue theorem and evaluation of integrals", "Conformal mapping"]
            }
        ]
    },
    {
        "branch": "Electronics & Communication Engineering",
        "semester": 3,
        "subject_name": "Basic Electronics",
        "modules": [
            {
                "module_number": 1,
                "title": "Introduction to Semiconductor",
                "topics": ["P-N junction formation, Energy band diagram", "V-I characteristics, Zener and Avalanche breakdown", "Diode circuits: Clippers, Clampers, Rectifiers", "Zener diode regulator"]
            },
            {
                "module_number": 2,
                "title": "Bipolar Junction Transistors (BJT)",
                "topics": ["PNP/NPN formation, Ebers Moll model", "CE, CB, CC configurations and characteristics", "Biasing techniques (Fixed, Voltage divider)", "Hybrid model and gain calculations"]
            },
            {
                "module_number": 3,
                "title": "Field Effect Transistors",
                "topics": ["JFET characteristics (N channel)", "MOSFET characteristics (Depletion and Enhancement)", "CS, CG, CD configurations"]
            },
            {
                "module_number": 4,
                "title": "Feedback Amplifiers",
                "topics": ["Positive and Negative feedback concepts", "Topologies of feedback amplifiers", "Effect on gain, impedance, bandwidth", "Oscillators and Barkhausen's criteria"]
            },
            {
                "module_number": 5,
                "title": "Operational Amplifier",
                "topics": ["Ideal characteristics, Virtual ground", "Inverting and Non-inverting modes", "Applications: Adder, Subtractor, Integrator, Differentiator, Comparator"]
            },
            {
                "module_number": 6,
                "title": "Special Semiconductor Devices",
                "topics": ["SCR construction and characteristics", "TRIAC, DIAC, IGBT", "UJT and Sawtooth generator"]
            }
        ]
    },
    {
        "branch": "Electronics & Communication Engineering",
        "semester": 3,
        "subject_name": "Digital Electronics",
        "modules": [
            {
                "module_number": 1,
                "title": "Minimization Techniques and Logic Gates",
                "topics": ["Number systems and codes (BCD, Gray, ASCII)", "Boolean algebra and De Morgan's Theorem", "K-map and Quine Mc-Cluskey minimization", "Logic Gates and Universal Gates", "TTL and CMOS Logic characteristics"]
            },
            {
                "module_number": 2,
                "title": "Combinational Circuits",
                "topics": ["Adders (Half, Full, Carry Look Ahead)", "Subtractors", "Multiplexer/Demultiplexer", "Encoder/Decoder", "Code converters and Comparators"]
            },
            {
                "module_number": 3,
                "title": "Sequential Circuits",
                "topics": ["Latches and Flip-flops (SR, JK, D, T, Master-Slave)", "Counters (Asynchronous, Synchronous, Up/Down)", "Shift Registers and Ring Counters", "State diagrams and Excitation tables"]
            },
            {
                "module_number": 4,
                "title": "Memory Devices",
                "topics": ["ROM, PROM, EPROM, EEPROM", "RAM organization (Static, Dynamic)", "PLA, PAL, and FPGA"]
            },
            {
                "module_number": 5,
                "title": "Synchronous and Asynchronous Circuits",
                "topics": ["Analysis of Synchronous Sequential Circuits", "Algorithmic State Machine", "Asynchronous Sequential Circuits (Hazards, Race conditions)", "A/D and D/A Converters"]
            }
        ]
    },
    {
        "branch": "Electronics & Communication Engineering",
        "semester": 3,
        "subject_name": "Network Theory",
        "modules": [
            {
                "module_number": 1,
                "title": "Network Theorems and Analysis",
                "topics": ["Reciprocity, Tellegen's theorem", "Mutual coupled circuits and Dot Convention", "Laplace Transform for circuit analysis", "Transient and Steady state response"]
            },
            {
                "module_number": 2,
                "title": "Electrical Transients",
                "topics": ["First and second order differential equations for R-L, R-C, R-L-C", "Time constants and natural response"]
            },
            {
                "module_number": 3,
                "title": "Graph Theory and Resonance",
                "topics": ["Circuit graph, Tree, Incidence matrix", "Series and Parallel Resonance", "Tie-set and Cut-set matrix"]
            },
            {
                "module_number": 4,
                "title": "Two Port Network",
                "topics": ["Z, Y, ABCD, and h-parameters", "Interconnections of two port networks"]
            },
            {
                "module_number": 5,
                "title": "Network Synthesis and Filters",
                "topics": ["Cauer and Foster methods for RL, RC, LC synthesis", "Passive Filters (Low pass, High pass, Band pass)", "Constant-k and m-derived filters"]
            }
        ]
    },
    {
        "branch": "Computer Science & Engineering",
        "semester": 3,
        "subject_name": "Biology",
        "modules": [
            {
                "module_number": 1,
                "title": "Introduction",
                "topics": [
                    "Comparison of biological and engineering systems (Eye vs Camera, Bird vs Aircraft)",
                    "Biological observations leading to major discoveries (Brownian motion, Thermodynamics)",
                    "Importance of biology as a scientific discipline"
                ]
            },
            {
                "module_number": 2,
                "title": "Classification",
                "topics": [
                    "Hierarchy of life forms",
                    "Classification based on cellularity, ultrastructure, and energy utilization",
                    "Model organisms (E. coli, S. cerevisiae, D. melanogaster, C. elegans, A. thaliana, M. musculus)"
                ]
            },
            {
                "module_number": 3,
                "title": "Genetics",
                "topics": [
                    "Mendel's laws of segregation and independent assortment",
                    "Concept of allele, gene mapping, and gene interaction",
                    "Meiosis and Mitosis",
                    "Concepts of recessiveness, dominance, and phenotype mapping",
                    "Single gene disorders in humans"
                ]
            },
            {
                "module_number": 4,
                "title": "Biomolecules",
                "topics": [
                    "Monomeric units and polymeric structures",
                    "Sugars, starch, and cellulose",
                    "Amino acids and proteins",
                    "Nucleotides and DNA/RNA",
                    "Lipids and two-carbon units"
                ]
            },
            {
                "module_number": 5,
                "title": "Enzymes",
                "topics": [
                    "Enzyme classification and mechanism of action",
                    "Enzyme kinetics and kinetic parameters",
                    "RNA catalysis"
                ]
            },
            {
                "module_number": 6,
                "title": "Information Transfer",
                "topics": [
                    "DNA as genetic material",
                    "Hierarchy of DNA structure (double helix to nucleosomes)",
                    "Genetic code: Universality and degeneracy",
                    "Definition of gene (complementation and recombination)"
                ]
            },
            {
                "module_number": 7,
                "title": "Macromolecular Analysis",
                "topics": [
                    "Protein structure hierarchy (Primary, secondary, tertiary, quaternary)",
                    "Proteins as enzymes, transporters, receptors, and structural elements"
                ]
            },
            {
                "module_number": 8,
                "title": "Metabolism",
                "topics": [
                    "Thermodynamics in biological systems (Exothermic/Endothermic)",
                    "ATP as energy currency",
                    "Glycolysis and Krebs cycle (Breakdown of glucose)",
                    "Photosynthesis (Synthesis of glucose)"
                ]
            },
            {
                "module_number": 9,
                "title": "Microbiology",
                "topics": [
                    "Concept of single-celled organisms (Species and strains)",
                    "Microscopy and ecological aspects",
                    "Growth kinetics and sterilization"
                ]
            }
        ]
    },
    {
        "branch": "Electronics & Communication Engineering",
        "semester": 3,
        "subject_name": "Electromagnetic Field Theory",
        "modules": [
            {
                "module_number": 1,
                "title": "Vector Calculus & Electrostatics",
                "topics": [
                    "Gradient, Divergence, Gauss's Divergence Theorem, Curl, Stoke's Theorem",
                    "Gauss's Law, Potential Function",
                    "Poisson's and Laplace's Equations",
                    "Electrostatic Uniqueness Theorem"
                ]
            },
            {
                "module_number": 2,
                "title": "Magnetostatics & Maxwell's Equations",
                "topics": [
                    "Ampere's Law, Faraday's Law",
                    "Magnetic Scalar and Vector Potential",
                    "Maxwell's Equations and Boundary Conditions",
                    "Displacement Current",
                    "Poynting's theorem"
                ]
            },
            {
                "module_number": 3,
                "title": "Electromagnetic Waves",
                "topics": [
                    "Plane Electromagnetic Waves in perfect Isotropic Dielectric",
                    "Partially Conducting Media and Good Conductors",
                    "Skin Depth",
                    "Polarization of Electromagnetic Waves",
                    "Normal and Oblique Incidences at Plane Boundaries (Conducting and Dielectric)",
                    "Total Internal Reflection, Brewster's Angle, Surface Impedance"
                ]
            },
            {
                "module_number": 4,
                "title": "Transmission Lines",
                "topics": [
                    "Parallel-Plane Transmission line parameters and equivalent circuit",
                    "Voltage and Current equations (Sending-End and Receiving-End)",
                    "Input Impedance, Quarter Wavelength line",
                    "Low-loss RF and UHF Transmission lines",
                    "Reflection and Standing Waves (VSWR)",
                    "Quarter Wave Impedance, Impedance Matching with Single Shunt Stub"
                ]
            },
            {
                "module_number": 5,
                "title": "Guided Waves",
                "topics": [
                    "Waves Between Parallel Planes (TE, TM, TEM)",
                    "Characteristics of TE and TM Waves",
                    "Velocities of Propagation, Wave Impedances",
                    "Rectangular Guides: TM & TE Waves, Impossibility of TEM Waves",
                    "Wave Impedances and Characteristic Impedances"
                ]
            },
            {
                "module_number": 6,
                "title": "Radiation",
                "topics": [
                    "General Solution of Maxwell's Equations",
                    "Retarded Potentials",
                    "Radiation Mechanism",
                    "Radiation Fields of an Alternating Current Element (Oscillating Electric Dipole)"
                ]
            }
        ]
    }
];

const cseSem4Data = [
    {
        "branch": "Computer Science & Engineering",
        "semester": 4,
        "subject_name": "Discrete Mathematics",
        "modules": [
            {
                "module_number": 1,
                "title": "Mathematical Logic",
                "topics": [
                    "Introduction, Statements and Notation",
                    "Connectives, Normal Forms",
                    "Theory of Inference for the Statement Calculus",
                    "The Predicate Calculus",
                    "Inference Theory of the Predicate Calculus"
                ]
            },
            {
                "module_number": 2,
                "title": "Set Theory and Algebraic Structures",
                "topics": [
                    "Basic Concepts of Set Theory",
                    "Representation of Discrete Structures",
                    "Relations and Ordering, Functions",
                    "Algebraic Systems, Semi groups and Monoids",
                    "Groups",
                    "Lattices as Partially Ordered Sets",
                    "Boolean algebra"
                ]
            },
            {
                "module_number": 3,
                "title": "Elementary Combinatorics",
                "topics": [
                    "Basics of Counting",
                    "Combinations and Permutations",
                    "Enumeration of Combinations and Permutations",
                    "Enumerating Combinations and Permutations with Repetitions",
                    "Enumerating Permutations with Constrained Repetitions",
                    "Binomial Coefficients",
                    "The Binomial and Multinomial Theorems",
                    "The Principle of Inclusion-Exclusion"
                ]
            },
            {
                "module_number": 4,
                "title": "Recurrence Relations",
                "topics": [
                    "Generating Functions of Sequences",
                    "Calculating Coefficients of generating functions",
                    "Recurrence relations",
                    "Solving recurrence relations by substitution and Generating functions",
                    "The method of Characteristic roots",
                    "Solutions of Inhomogeneous Recurrence Relations"
                ]
            },
            {
                "module_number": 5,
                "title": "Graphs and Trees",
                "topics": [
                    "Basic Concepts, Isomorphisms and Subgraphs",
                    "Trees and their Properties, Spanning Trees",
                    "Directed Trees, Binary Trees",
                    "Planar Graphs, Euler's Formula",
                    "Multigraphs and Euler Circuits",
                    "Hamiltonian Graphs, Chromatic Numbers",
                    "The Four-Color Problem"
                ]
            }
        ]
    },
    {
        "branch": "Computer Science & Engineering",
        "semester": 4,
        "subject_name": "Design and Analysis of Algorithms",
        "modules": [
            {
                "module_number": 1,
                "title": "Introduction & Analysis",
                "topics": [
                    "Analyzing algorithms",
                    "Recurrence Equations",
                    "Growth function: Asymptotic notation",
                    "Standard notation & common functions",
                    "Recurrence relation, different methods of solution of recurrence equations"
                ]
            },
            {
                "module_number": 2,
                "title": "Divide and Conquer & Backtracking Paradigm",
                "topics": [
                    "Introduction to Divide and Conquer paradigm",
                    "Quick and merge sorting techniques",
                    "Linear time selection algorithm",
                    "Basic divide and conquer algorithm for matrix multiplication",
                    "Backtracking & Recursive backtracking",
                    "Applications of backtracking paradigm"
                ]
            },
            {
                "module_number": 3,
                "title": "Greedy Paradigm & Dynamic Programming",
                "topics": [
                    "Greedy Paradigm: Basic greedy strategy & computing minimum spanning trees",
                    "Algorithms of Kruskal and Prim",
                    "Union to Find Algorithm & their applications",
                    "Dijkstra's algorithms",
                    "Knapsack problem and Huffman trees",
                    "Basic dynamic programming paradigm",
                    "Optimal matrix chain multiplication",
                    "Longest common subsequence problems"
                ]
            },
            {
                "module_number": 4,
                "title": "Graph Algorithms & String Matching Algorithms",
                "topics": [
                    "Representational issues in graphs",
                    "Depth first search & Breath first search on graphs",
                    "Bi-connected components and strongly connected components using DFS",
                    "Topological sorting",
                    "Shortest Path Algorithms: Bellman-Ford, Dijkstra's algorithm & Analysis",
                    "Floyd-Warshall's all pairs shortest path algorithm",
                    "String matching: Knuth Morris and Pratt algorithms"
                ]
            },
            {
                "module_number": 5,
                "title": "NP-Complete Problems",
                "topics": [
                    "Solvable problems, Types of problems",
                    "Non deterministic algorithm and its relationship to backtracking",
                    "NP-hardness and NP-completeness",
                    "Cook's theorem",
                    "Polynomial transformation",
                    "Vertex cover, subset sum and Hamiltonian cycle problems"
                ]
            }
        ]
    },
    {
        "branch": "Computer Science & Engineering",
        "semester": 4,
        "subject_name": "Computer Organization and Architecture",
        "modules": [
            {
                "module_number": 1,
                "title": "Digital Computers & Basic Organization",
                "topics": [
                    "Block diagram of Digital Computer",
                    "Computer Organization, Design and Architecture definition",
                    "Instruction codes, Computer Registers",
                    "Computer instructions, Timing and Control",
                    "Instruction cycle, Memory Reference Instructions",
                    "Input-Output and Interrupt",
                    "Micro Programmed Control: Control memory, Address sequencing, design of control unit"
                ]
            },
            {
                "module_number": 2,
                "title": "Central Processing Unit & 8086 Architecture",
                "topics": [
                    "The 8086 Processor Architecture",
                    "Register organization, Physical memory organization",
                    "General Bus Operation, I/O Addressing Capability",
                    "Minimum and Maximum mode system",
                    "8086 Instruction Set and Assembler Directives",
                    "Addressing modes"
                ]
            },
            {
                "module_number": 3,
                "title": "Assembly Language Programming with 8086",
                "topics": [
                    "Machine level programs, Machine coding",
                    "Programming with an assembler",
                    "Stack structure of 8086",
                    "Interrupts and Interrupt service routines",
                    "Passing parameters to procedures, Macros"
                ]
            },
            {
                "module_number": 4,
                "title": "Computer Arithmetic & Input-Output",
                "topics": [
                    "Addition and Subtraction, Multiplication Algorithms, Division Algorithms",
                    "Floating point Arithmetic operations",
                    "Input-Output Interface",
                    "Asynchronous data transfer, Modes of Transfer",
                    "Priority Interrupt, Direct memory Access (DMA)",
                    "Input-Output Processor (IOP)"
                ]
            },
            {
                "module_number": 5,
                "title": "Memory Organization & Advanced Processing",
                "topics": [
                    "Memory Hierarchy, Main Memory, Auxiliary memory",
                    "Cache Memory, Associate Memory",
                    "Parallel Processing, Pipelining (Arithmetic, Instruction, RISC)",
                    "Vector Processing, Array Processors",
                    "Multi Processors: Interconnection Structures, Inter processor arbitration"
                ]
            }
        ]
    },
    {
        "branch": "Computer Science & Engineering",
        "semester": 4,
        "subject_name": "Object Oriented Programming",
        "modules": [
            {
                "module_number": 1,
                "title": "Introduction to Java",
                "topics": [
                    "Java programming Environment, Data Types, variables, Operators",
                    "Control Flow: Selection statements, Iteration",
                    "Classes and Objects, Constructors, static, final, this keyword",
                    "Inheritance: Super, Method overriding, Dynamic method Dispatch, Abstract Classes",
                    "Packages & Interfaces",
                    "Exception Handling: Try & catch, throw, throws, finally, Built in and user defined exceptions"
                ]
            },
            {
                "module_number": 2,
                "title": "Multi Threading & Networking",
                "topics": [
                    "Java Thread Model, Priorities, Synchronization",
                    "Creating Multiple threads",
                    "String Handling: String constructors, Character Extraction, Comparison",
                    "Java I/O: Byte streams, Character streams, Serialization",
                    "JDBC: Fundamentals, Type I to IV drivers",
                    "Networking: Sockets, URL format, TCP/IP Server Sockets"
                ]
            },
            {
                "module_number": 3,
                "title": "Applets, AWT & Swing",
                "topics": [
                    "Applets: Architecture, HTML APPLET Tag",
                    "Event Handing: Delegation Event model, Event Listeners, Adapter classes",
                    "AWT: Window fundamentals, Frame, Canvas, Graphics, Layout managers",
                    "Swing: JApplet, Icons, Labels, Text fields, Buttons, Tables, Trees",
                    "Exploring Java-lang: Simple type wrappers, Runtime memory management"
                ]
            }
        ]
    },
    {
        "branch": "Computer Science & Engineering",
        "semester": 4,
        "subject_name": "Mathematics - IV",
        "modules": [
            {
                "module_number": 1,
                "title": "Numerical Methods: Solutions of Equations",
                "topics": [
                    "Solution of algebraic and transcendental equation by bisection, iteration, false position and Newton-Raphson methods",
                    "Solution of a system of linear simultaneous equations by Gauss elimination, Gauss-Jordan",
                    "Crout's triangularisation",
                    "Jacobi and Gauss-Seidel methods"
                ]
            },
            {
                "module_number": 2,
                "title": "Numerical Methods: Interpolation",
                "topics": [
                    "Finite difference, Symbolic relations",
                    "Interpolation and Extrapolation",
                    "Newton-Gregory forward and backward",
                    "Gauss forward and backward",
                    "Lagrange's formulae",
                    "Inverse Interpolation by Lagrange methods"
                ]
            },
            {
                "module_number": 3,
                "title": "Numerical Differentiation, Integration & ODEs",
                "topics": [
                    "Numerical differentiation and integration: Trapezoidal, Simpson's 1/3rd, Simpson's 3/8th and Weddle quadrature formulae",
                    "Numerical solution of first order ordinary differential equations by Taylor's series",
                    "Picard's, Euler's, Modified Euler's methods",
                    "Runge-Kutta methods"
                ]
            },
            {
                "module_number": 4,
                "title": "Statistical Methods: Probability",
                "topics": [
                    "Moments, skewness and kurtosis",
                    "Probability: Various approaches, two theorems, conditional probability, Bayes theorem",
                    "Random variable: Definition, probability mass & density functions, distribution function",
                    "Mathematical expectation and moment generating function",
                    "Probability distributions: Bernoulli, binomial, Poisson and normal distributions"
                ]
            },
            {
                "module_number": 5,
                "title": "Statistical Methods: Regression & Testing",
                "topics": [
                    "Theory of least squares and curve fitting",
                    "Correlation and Regression: Simple, multiple & partial correlation coefficients",
                    "Regression lines, regression coefficients and their properties",
                    "Test of significance: Normal test, t-test, chi square test and F test"
                ]
            }
        ]
    },
    {
        "branch": "Computer Science & Engineering",
        "semester": 4,
        "subject_name": "Environmental Science",
        "modules": [
            {
                "module_number": 1,
                "title": "Introduction to Environmental Science",
                "topics": [
                    "Concept and scope of Environmental science",
                    "Components of environment",
                    "Environmental segments and their importance"
                ]
            },
            {
                "module_number": 2,
                "title": "Ecology",
                "topics": [
                    "Ecosystem and its characteristics features",
                    "Structure and function of Forest ecosystem, grassland ecosystem, desert ecosystem and aquatic ecosystem",
                    "Ecological balance and consequences of imbalance"
                ]
            },
            {
                "module_number": 3,
                "title": "Atmosphere",
                "topics": [
                    "Atmospheric composition, energy balance, climate, weather",
                    "Depletion of ozone layer, green house effect, acid rain",
                    "Particles, ions and radicals in the atmosphere",
                    "Chemical and photochemical reactions in the atmosphere"
                ]
            },
            {
                "module_number": 4,
                "title": "Air Pollution and Control",
                "topics": [
                    "Air pollutants, sources and effect of air pollutants",
                    "Primary and secondary pollutants",
                    "Photochemical smog, fly ash, inorganic and organic particulate matter",
                    "Air quality standards, sampling, monitoring and control measures for pollutants"
                ]
            },
            {
                "module_number": 5,
                "title": "Water Pollution and Control",
                "topics": [
                    "Aquatic environment, water pollution, sources and their effect",
                    "River, lake and ground water pollution",
                    "Eutrophication",
                    "Water quality standard and water pollution control measures",
                    "Waste water treatment"
                ]
            },
            {
                "module_number": 6,
                "title": "Land Pollution",
                "topics": [
                    "Lithosphere, composition of soil",
                    "Acid base and ion exchange reactions in soil",
                    "Soil erosion, landslides, desertification",
                    "Pollutants (municipal, industrial, commercial, agricultural, hazardous solid wastes)",
                    "Origin and effects, collection and disposal of solid wastes",
                    "Recovery and conversion methods"
                ]
            },
            {
                "module_number": 7,
                "title": "Noise Pollution",
                "topics": [
                    "Noise classification and its sources",
                    "Effects and measurement",
                    "Noise pollution hazards, standards and noise pollution control"
                ]
            }
        ]
    }
];

const eceSem4Data = [
    {
        "branch": "Electronics & Communication Engineering",
        "semester": 4,
        "subject_name": "Mathematics-IV",
        "modules": [
            {
                "module_number": 1,
                "title": "Numerical Methods",
                "topics": ["Roots of equations (Newton-Raphson, Bisection)", "Solution of linear equations (Gauss elimination, Jacobi, Seidel)", "Interpolation (Newton-Gregory, Lagrange)", "Numerical Integration (Trapezoidal, Simpson's)", "Runge-Kutta method for ODEs"]
            },
            {
                "module_number": 2,
                "title": "Statistical Methods",
                "topics": ["Probability theory and Bayes theorem", "Random variables and Probability distributions (Binomial, Poisson, Normal)", "Correlation and Regression analysis", "Tests of significance (t-test, Chi-square, F-test)"]
            }
        ]
    },
    {
        "branch": "Electronics & Communication Engineering",
        "semester": 4,
        "subject_name": "Data Structures and Algorithms",
        "modules": [
            {
                "module_number": 1,
                "title": "Basic Concepts",
                "topics": ["Algorithm Specification and Complexity Analysis (Big O)", "Recursive algorithms", "Introduction to Linear and Non-Linear data structures"]
            },
            {
                "module_number": 2,
                "title": "Arrays and Linked Lists",
                "topics": ["Arrays (1D, 2D, Sparse Matrices)", "Singly, Circular, and Doubly Linked Lists", "Stack and Queue ADT (Array and Linked implementation)"]
            },
            {
                "module_number": 3,
                "title": "Trees and Heaps",
                "topics": ["Binary Trees and Traversals", "Threaded binary trees", "Priority Queues and Max Heaps"]
            },
            {
                "module_number": 4,
                "title": "Searching and Sorting",
                "topics": ["Linear and Binary Search", "Hashing and Hash tables", "Sorting algorithms (Insertion, Selection, Quick, Merge, Heap, Radix)"]
            },
            {
                "module_number": 5,
                "title": "Graphs",
                "topics": ["Graph representations (Adjacency Matrix/List)", "DFS and BFS traversals", "Binary Search Trees (AVL, Red-Black, B-Trees)"]
            }
        ]
    },
    {
        "branch": "Electronics & Communication Engineering",
        "semester": 4,
        "subject_name": "Analog Electronics",
        "modules": [
            {
                "module_number": 1,
                "title": "Transistor Biasing and Stability",
                "topics": ["Operating point and Biasing circuits", "Thermal runaway and stabilization techniques"]
            },
            {
                "module_number": 2,
                "title": "Transistor at Low Frequency",
                "topics": ["h-parameter model", "Analysis of CE, CC, CB amplifiers", "Miller's Theorem"]
            },
            {
                "module_number": 3,
                "title": "Multi Stage and High Frequency Amplifiers",
                "topics": ["RC coupled amplifier frequency response", "High frequency Hybrid-pi model", "Gain bandwidth product"]
            },
            {
                "module_number": 4,
                "title": "Power and Tuned Amplifiers",
                "topics": ["Class A, B, AB, C amplifiers", "Push-pull amplifier", "Single and Double tuned amplifiers"]
            },
            {
                "module_number": 5,
                "title": "Op-Amp Applications and Oscillators",
                "topics": ["Precision Rectifier, Log amplifier, Schmitt trigger", "Active Filters and Instrumentation Amplifier", "555 Timer Multivibrators", "Sinusoidal Oscillators (RC Phase shift, Wein Bridge, Colpitts)"]
            }
        ]
    },
    {
        "branch": "Electronics & Communication Engineering",
        "semester": 4,
        "subject_name": "Analog Communication",
        "modules": [
            {
                "module_number": 1,
                "title": "Signals and Noise",
                "topics": ["Communication System Elements", "Random Processes and Gaussian Noise", "Thermal and Shot noise calculations", "Noise figure and temperature"]
            },
            {
                "module_number": 2,
                "title": "Amplitude Modulation",
                "topics": ["DSB, SSB, VSB generation and detection", "AM Transmitter and Receiver", "FDM Concept"]
            },
            {
                "module_number": 3,
                "title": "Angle Modulation",
                "topics": ["FM and PM concepts", "Narrowband and Wideband FM", "Generation and detection of FM", "Automatic Frequency Control"]
            },
            {
                "module_number": 4,
                "title": "Noise Performance",
                "topics": ["Noise in AM, FM, and PM systems", "Pre-emphasis and De-emphasis", "Superheterodyne Receiver"]
            },
            {
                "module_number": 5,
                "title": "Pulse Modulation",
                "topics": ["Sampling Theorem", "PAM, PWM, PPM generation and detection", "Time Division Multiplexing", "Information Theory and Entropy"]
            }
        ]
    },
    {
        "branch": "Electronics & Communication Engineering",
        "semester": 4,
        "subject_name": "Semiconductor Devices",
        "modules": [
            {
                "module_number": 1,
                "title": "Carrier Concentrations",
                "topics": ["Fermi level", "Electron and Hole concentration", "Hall effect", "Quasi-Fermi levels"]
            },
            {
                "module_number": 2,
                "title": "Transport Phenomena",
                "topics": ["Drift and Diffusion", "Continuity equation", "Haynes-Shockley experiment"]
            },
            {
                "module_number": 3,
                "title": "P-N Junctions",
                "topics": ["Space Charge and Contact Potential", "Junction breakdown", "Capacitance (Storage and Junction)"]
            },
            {
                "module_number": 4,
                "title": "Junction Diodes",
                "topics": ["Varactor, Tunnel, and Photo Diodes", "Solar Cells and LEDs", "PIN and Avalanche Photodiodes"]
            },
            {
                "module_number": 5,
                "title": "BJT and FET",
                "topics": ["Charge transport in BJT", "Switching transients", "MOSFET I-V characteristics", "CCD and Fabrication basics"]
            }
        ]
    },
    {
        "branch": "Electronics & Communication Engineering",
        "semester": 4,
        "subject_name": "Environmental Science",
        "modules": [
            {
                "module_number": 1,
                "title": "Ecology and Environment",
                "topics": ["Scope of Environmental Science", "Ecosystem structure and function", "Ecological balance"]
            },
            {
                "module_number": 2,
                "title": "Atmosphere and Air Pollution",
                "topics": ["Atmospheric composition and Climate change", "Ozone depletion and Green House Effect", "Air pollutants and control measures"]
            },
            {
                "module_number": 3,
                "title": "Water and Land Pollution",
                "topics": ["Water pollution sources and treatment", "Eutrophication", "Soil erosion and Solid waste management", "Noise pollution and control"]
            }
        ]
    }
];

const cseSem5Data = [
    {
        "branch": "Computer Science & Engineering",
        "semester": 5,
        "subject_name": "Operating Systems",
        "modules": [
            {
                "module_number": 1,
                "title": "Fundamentals",
                "topics": [
                    "Role and purpose of operating systems",
                    "Functionality of a typical operating system",
                    "Design issues (efficiency, robustness, flexibility, portability, security, compatibility)",
                    "Basic principles: Structuring methods, abstractions, processes, and resources",
                    "Design of application programming interfaces (APIs)",
                    "Device organization, interrupts, user/system state transitions"
                ]
            },
            {
                "module_number": 2,
                "title": "Process Management",
                "topics": [
                    "Scheduling: Preemptive and non-preemptive scheduling, scheduling policies",
                    "Processes and threads, real-time issues",
                    "Concurrency: Concurrent execution, states and state diagrams",
                    "Implementation structures (ready lists, process control blocks)",
                    "Dispatching and context switching, interrupt handling",
                    "Mutual exclusion: Deadlock detection and prevention, solution strategies",
                    "Models and mechanisms (semaphores, monitors, condition variables, rendezvous)",
                    "Producer-consumer problems, synchronization, multiprocessor issues"
                ]
            },
            {
                "module_number": 3,
                "title": "Memory Management",
                "topics": [
                    "Physical memory and memory management hardware",
                    "Overlays, swapping, and partitions",
                    "Paging and segmentation",
                    "Page placement and replacement policies",
                    "Working sets and thrashing",
                    "Caching"
                ]
            },
            {
                "module_number": 4,
                "title": "Secondary Storage Management",
                "topics": [
                    "Device management: Characteristics of serial and parallel devices",
                    "Buffering strategies, direct memory access, recovery from failures",
                    "File systems: Fundamental concepts (data, metadata, operations, organization, buffering)",
                    "Sequential vs non-sequential files",
                    "Content and structure of directories",
                    "File system techniques (partitioning, mounting, virtual file systems, memory-mapped files)",
                    "Naming, searching, access, and backup strategies"
                ]
            },
            {
                "module_number": 5,
                "title": "Security and Protection",
                "topics": [
                    "Overview of system security",
                    "Policy/mechanism separation",
                    "Security methods and devices",
                    "Protection, access, and authentication",
                    "Models of protection, memory protection",
                    "Encryption, recovery management"
                ]
            }
        ]
    },
    {
        "branch": "Computer Science & Engineering",
        "semester": 5,
        "subject_name": "Database Management Systems",
        "modules": [
            {
                "module_number": 1,
                "title": "Introduction",
                "topics": [
                    "File & Data Base Concept",
                    "Overview of DBMS",
                    "Data Models",
                    "Schema and Instances",
                    "Data Independence"
                ]
            },
            {
                "module_number": 2,
                "title": "Entity-Relationship & Relational Model",
                "topics": [
                    "Basic concepts, Keys, Entity-Relationship Diagram",
                    "Cardinality ratios, Strong & Weak Entity Sets",
                    "Specialization, Generalization, Aggregation",
                    "Relational Algebra, Extended Relational Algebra Operations",
                    "Views, Modifications Of the Database, Relational Calculus"
                ]
            },
            {
                "module_number": 3,
                "title": "SQL",
                "topics": [
                    "Basic Concepts, Set operations, Aggregate Functions",
                    "Null Values, assertions, views, Nested Sub-queries",
                    "Cursors, Stored procedures and triggers",
                    "Integrity Constraints: Domain Constraints, Referential Integrity, Codd's rule"
                ]
            },
            {
                "module_number": 4,
                "title": "Functional Dependencies and Normalization",
                "topics": [
                    "Functional Dependency, Armstrong's axioms, Canonical Cover",
                    "Closure, Full and Partial Functional dependencies",
                    "Prime & Non Prime attribute",
                    "1NF, 2NF, 3NF, BCNF",
                    "Multi valued Dependency, 4NF, 5NF, DKNF"
                ]
            },
            {
                "module_number": 5,
                "title": "Transaction & Concurrency Control",
                "topics": [
                    "Transaction concept, ACID properties",
                    "Conflict & View serializabilty",
                    "Concurrency Control",
                    "Lock base protocols, Two phase locking"
                ]
            },
            {
                "module_number": 6,
                "title": "Storage Strategies & Query Optimization",
                "topics": [
                    "Single-Level Index (primary, secondary, clustering), Multi-level Indexes",
                    "Dynamic Multi-level Indexes, Hashing Techniques, B tree and B+ tree",
                    "Full Table scan, Indexed-based scan",
                    "Merge join, Nested loop join",
                    "Heuristic Optimization, Cost Based Optimization"
                ]
            },
            {
                "module_number": 7,
                "title": "Backup, Recovery & Distributed DB",
                "topics": [
                    "Physical & Logical Backup, Transaction logs, Recovery techniques",
                    "Distributed Databases: Data Fragmentation, Replication and Allocation",
                    "Client-Server Architecture"
                ]
            }
        ]
    },
    {
        "branch": "Computer Science & Engineering",
        "semester": 5,
        "subject_name": "Compiler Design",
        "modules": [
            {
                "module_number": 1,
                "title": "Introduction to Compiler",
                "topics": [
                    "Analysis of source programs, Tokens, patterns, lexemes",
                    "Phases of compilers",
                    "Parsing, Parse trees, Ambiguity",
                    "Top-down parsing, Bottom-up parsing, Syntax directed translation"
                ]
            },
            {
                "module_number": 2,
                "title": "Finite Automata",
                "topics": [
                    "Classification of grammars",
                    "NFA, DFA, Conversion of NFA to DFA",
                    "RE to NFA (Thompson's Construction)",
                    "Optimization of NFA/DFA"
                ]
            },
            {
                "module_number": 3,
                "title": "Context Free Grammar",
                "topics": [
                    "RE vs. CFG",
                    "Eliminating ambiguity and left recursion",
                    "Left factoring"
                ]
            },
            {
                "module_number": 4,
                "title": "Compiler Parser",
                "topics": [
                    "Top down parsing-LL parser, LL grammars",
                    "Bottom up parsing- LR parser, SLR parser, CLR parser, LALR parser",
                    "Operator precedence grammar",
                    "Error handling"
                ]
            },
            {
                "module_number": 5,
                "title": "Run Time Environments",
                "topics": [
                    "Symbol tables",
                    "Dynamic storage allocation technique",
                    "Organization for non-block and block structured languages"
                ]
            },
            {
                "module_number": 6,
                "title": "Intermediate Code Generation",
                "topics": [
                    "Intermediate languages, graphical representations",
                    "Synthesized and inherited attributes",
                    "Three address, quadruples, triples, indirect triples",
                    "Flow of control statement"
                ]
            },
            {
                "module_number": 7,
                "title": "Code Optimization and Generation",
                "topics": [
                    "Basic blocks and flow graphs",
                    "Optimization of basic blocks",
                    "Code optimization techniques",
                    "Target machine code and simple code generator"
                ]
            }
        ]
    },
    {
        "branch": "Computer Science & Engineering",
        "semester": 5,
        "subject_name": "Web Technology",
        "modules": [
            {
                "module_number": 1,
                "title": "Introduction to HTML and Web Pages",
                "topics": [
                    "Fundamentals of HTML elements, tags, hyperlink, lists, tables, frames, form",
                    "Web Pages: types and issues, tiers",
                    "WWW: Basic concept, web client and web server",
                    "HTTP protocol, URL"
                ]
            },
            {
                "module_number": 2,
                "title": "Dynamic and Active Web Pages",
                "topics": [
                    "Dynamic web pages: Need, overview of DHTML, Cascading Style Sheets (CSS)",
                    "Active web pages: Need, java applet life cycle"
                ]
            },
            {
                "module_number": 3,
                "title": "JavaScript and Java Servlet",
                "topics": [
                    "JavaScript: Data types, variables, operators, conditional statements, array object, string object",
                    "Java Servlet: Servlet environment, Servlet API, Servlet Life cycle, cookies and sessions"
                ]
            },
            {
                "module_number": 4,
                "title": "JSP",
                "topics": [
                    "JSP architecture, JSP tags, methods in JSP",
                    "Processing request and generating dynamic response",
                    "Inserting applets and java beans into JSP",
                    "Comparing JSP and CGI, JSP and ASP",
                    "Introduction to JDBC, prepare statement and callable statement"
                ]
            },
            {
                "module_number": 5,
                "title": "J2EE and XML",
                "topics": [
                    "J2EE web services, Enterprise Java Beans, EJB vs. Java Beans",
                    "Basic of RMI, JNI",
                    "XML: Basics, elements and attributes, DTD, xml parsers"
                ]
            }
        ]
    },
    {
        "branch": "Computer Science & Engineering",
        "semester": 5,
        "subject_name": "Principles of Programming Languages",
        "modules": [
            {
                "module_number": 1,
                "title": "Structural Program Development",
                "topics": [
                    "Concepts of structural program development",
                    "Concept of data types, precedence and associativity of operators",
                    "Conditional transfer, deterministic and in-deterministic loops"
                ]
            },
            {
                "module_number": 2,
                "title": "Recursions and Functions",
                "topics": [
                    "Recursions",
                    "Functions and procedures: call by value, call by reference",
                    "Programming for numerical methods",
                    "Records"
                ]
            },
            {
                "module_number": 3,
                "title": "Pointers and Arrays",
                "topics": [
                    "Data-type handling and various constructs",
                    "Pointers: passing parameters using pointers",
                    "Non-numeric processing",
                    "Concept of arrays of pointers and pointers to pointers"
                ]
            },
            {
                "module_number": 4,
                "title": "Structures and Files",
                "topics": [
                    "Structures and unions: concept of information hiding",
                    "Files: basic concept of various types of file access methods",
                    "Sequential, indexed sequential, random access"
                ]
            },
            {
                "module_number": 5,
                "title": "Advanced Programming Languages",
                "topics": [
                    "Advanced Programming Languages like C++, ADA, LISP, PROLOG, and PASCAL",
                    "Comparison of various languages"
                ]
            }
        ]
    }
];

const eceSem5Data = [
    {
        "branch": "Electronics & Communication Engineering",
        "semester": 5,
        "subject_name": "Microprocessor & Interfacing",
        "modules": [
            {
                "module_number": 1,
                "title": "Introduction",
                "topics": ["Microprocessor architecture and operations", "Bus organization", "Memory and I/O systems"]
            },
            {
                "module_number": 2,
                "title": "8085 Microprocessor",
                "topics": ["8085 Architecture and Pin functions", "Instruction Cycle and Timing Diagrams", "Memory Interfacing"]
            },
            {
                "module_number": 3,
                "title": "Assembly Language Programming",
                "topics": ["Addressing Modes", "Instruction Set", "Programming techniques (Looping, Counting, Indexing)", "Stack and Subroutines"]
            },
            {
                "module_number": 4,
                "title": "Interfacing",
                "topics": ["Interfacing I/O devices", "8259A Interrupt Controller", "8255A Programmable Peripheral Interface"]
            },
            {
                "module_number": 5,
                "title": "Advanced Microprocessors",
                "topics": ["8086 Architecture and Segmentation", "80286 Real/Protected mode", "Multitasking concepts"]
            }
        ]
    },
    {
        "branch": "Electronics & Communication Engineering",
        "semester": 5,
        "subject_name": "Digital Communication System",
        "modules": [
            {
                "module_number": 1,
                "title": "Source Encoding",
                "topics": ["PCM, DPCM, Delta Modulation", "Quantization noise and Companding", "Multiplexing (TDM, FDM)"]
            },
            {
                "module_number": 2,
                "title": "Baseband Transmission",
                "topics": ["Matched Filter and Error Probability", "Inter Symbol Interference (ISI)", "Nyquist criterion", "Eye Pattern"]
            },
            {
                "module_number": 3,
                "title": "Line Coding and Equalization",
                "topics": ["Line codes (NRZ, RZ, Manchester)", "Adaptive Equalization"]
            },
            {
                "module_number": 4,
                "title": "Digital Modulation Techniques",
                "topics": ["ASK, FSK, PSK, QPSK, MSK", "Coherent and Non-coherent detection", "Error calculation"]
            },
            {
                "module_number": 5,
                "title": "Information Theory and Spread Spectrum",
                "topics": ["Entropy and Channel Capacity", "Shannon's Law", "Spread Spectrum (DSSS, FHSS, CDMA)", "Error Control Coding (Huffman, Shannon-Fano)"]
            }
        ]
    },
    {
        "branch": "Electronics & Communication Engineering",
        "semester": 5,
        "subject_name": "Linear Control System",
        "modules": [
            {
                "module_number": 1,
                "title": "Introduction",
                "topics": ["Open and Closed loop systems", "Mathematical modeling", "Transfer functions and Signal Flow Graphs"]
            },
            {
                "module_number": 2,
                "title": "Time Response Analysis",
                "topics": ["Standard test signals", "First and Second order system response", "Steady state errors and error constants"]
            },
            {
                "module_number": 3,
                "title": "Stability Analysis",
                "topics": ["Routh-Hurwitz criterion", "Root Locus technique"]
            },
            {
                "module_number": 4,
                "title": "Frequency Response Analysis",
                "topics": ["Bode Plots", "Polar and Nyquist Plots", "Gain and Phase Margin", "Compensators (Lag, Lead)"]
            },
            {
                "module_number": 5,
                "title": "State Space Analysis",
                "topics": ["State variable models", "Controllability and Observability", "State Transition Matrix"]
            }
        ]
    },
    {
        "branch": "Electronics & Communication Engineering",
        "semester": 5,
        "subject_name": "Signal & System",
        "modules": [
            {
                "module_number": 1,
                "title": "Signals and Systems Introduction",
                "topics": [
                    "Continuous Time and Discrete Time signals",
                    "Exponential and Sinusoidal Signals",
                    "Unit Impulse and Unit Step Functions",
                    "Continuous and Discrete Time Systems, Basic System Properties",
                    "Linear Time Invariant Systems: Discrete Time LTI Systems, Continuous Time LTI Systems",
                    "Properties of LTI Systems, Causal LTI Systems described by Difference equations"
                ]
            },
            {
                "module_number": 2,
                "title": "Fourier Series & Continuous Time Fourier Transform",
                "topics": [
                    "Response of LTI systems to Complex Exponentials",
                    "Fourier series Representation of CT periodic Signals, properties of CT Fourier Series",
                    "Fourier Series representation of DT periodic Signals, properties of DFS",
                    "Fourier series and LTI Systems, Filtering, Examples of CT and DT filters",
                    "Continuous Time Fourier Transform: Representation of periodic Signals, properties",
                    "Convolution and multiplication property of continuous FT",
                    "Systems characterized by Linear Constant Coefficient Differential Equations"
                ]
            },
            {
                "module_number": 3,
                "title": "Time and Frequency Characterization",
                "topics": [
                    "Magnitude and phase representation of FT",
                    "Magnitude and phase response of LTI systems",
                    "Time domain and Frequency domain aspects of ideal and non-ideal filters"
                ]
            },
            {
                "module_number": 4,
                "title": "DTFT, DFT and Sampling",
                "topics": [
                    "Discrete Time Fourier Transform (DTFT) and Discrete Fourier Transform (DFT)",
                    "Properties of DTFT and DFT, convolution and multiplication property, Duality",
                    "Systems characterized by Linear Constant Coefficient Difference Equations",
                    "Sampling: Sampling theorem, Impulse sampling, sampling with zero order Hold",
                    "Reconstruction of signal from its samples using interpolation",
                    "Effect of under sampling"
                ]
            },
            {
                "module_number": 5,
                "title": "Z-Transform and Signal Flow Graphs",
                "topics": [
                    "Z-transform, Region of convergence and its properties",
                    "Inverse Z transform, properties of ZT",
                    "Analysis and characterization of LTI systems using ZT",
                    "System function algebra and block diagram representations",
                    "Signal Flow Graphs: Impulse Response and Transfer function",
                    "Block diagrams, Basic properties of SFG, SFG Terms, SFG Algebra, Gain formula",
                    "Application of gain formula to block diagrams"
                ]
            }
        ]
    },
    {
        "branch": "Electronics & Communication Engineering",
        "semester": 5,
        "subject_name": "Electronics Instrumentation",
        "modules": [
            {
                "module_number": 1,
                "title": "Measurement And Error",
                "topics": [
                    "Sensitivity, Resolution, Accuracy and Precision",
                    "Absolute and Relative types of errors",
                    "Statistical analysis, Probability of Limiting errors, Linearity"
                ]
            },
            {
                "module_number": 2,
                "title": "Instruments",
                "topics": [
                    "Current and Resistance in instruments",
                    "Analog and Digital Multimeters",
                    "Measurement of time and frequency",
                    "Digital Frequency Meter and applications"
                ]
            },
            {
                "module_number": 3,
                "title": "Impedance Measurement",
                "topics": [
                    "Kelvin Bridge, Megger, Maxwell, Hay and Shering Bridges",
                    "Q-meter, Noise and Interference reduction techniques in Measurement Systems",
                    "Wave Analyzer, Spectrum Analyzer, FFT Analyzer",
                    "Oscilloscopes, Pulse Measurements, Delayed Time Base",
                    "Analog Storage, Sampling and Digital Storage Oscilloscopes"
                ]
            },
            {
                "module_number": 4,
                "title": "Transducers",
                "topics": [
                    "Classification and selection of Transducers",
                    "Introduction to Strain, Load, Force, Displacement, Velocity, Acceleration, Pressure and Temperature Measurements",
                    "Introduction to Smart sensors and MEMS"
                ]
            },
            {
                "module_number": 5,
                "title": "Data Acquisition Systems (DAS)",
                "topics": [
                    "Introduction to DAS: Block Diagram, Specifications and various components",
                    "Applications of DAS in various fields",
                    "General purpose Instrumentation Bus (GP-IB): Protocol, SCPI Commands",
                    "Applications to DSO and DMM"
                ]
            }
        ]
    }
];

const cseSem6Data = [
    {
        "branch": "Computer Science & Engineering",
        "semester": 6,
        "subject_name": "Computer Networks",
        "modules": [
            {
                "module_number": 1,
                "title": "Data Communication Components",
                "topics": [
                    "Representation of data and its flow",
                    "Networks, Various Connection Topology",
                    "Protocols and Standards",
                    "OSI model",
                    "Transmission Media"
                ]
            },
            {
                "module_number": 2,
                "title": "LAN & Bandwidth Utilization",
                "topics": [
                    "Wired LAN, Wireless LANs",
                    "Connecting LAN and Virtual LAN",
                    "Techniques for Bandwidth utilization: Multiplexing (Frequency, Time, Wave division)",
                    "Concepts on spread spectrum"
                ]
            },
            {
                "module_number": 3,
                "title": "Data Link Layer",
                "topics": [
                    "Error Detection and Error Correction",
                    "Fundamentals, Block coding",
                    "Hamming Distance",
                    "CRC"
                ]
            },
            {
                "module_number": 4,
                "title": "Flow & Error Control Protocols",
                "topics": [
                    "Stop and Wait, Go back - N ARQ, Selective Repeat ARQ",
                    "Sliding Window, Piggybacking",
                    "Random Access, Multiple access protocols (Pure ALOHA, Slotted ALOHA, CSMA/CD, CDMA/CA)"
                ]
            },
            {
                "module_number": 5,
                "title": "Network Layer",
                "topics": [
                    "Switching, Logical addressing IPV4, IPV6",
                    "Address mapping (ARP, RARP, BOOTP, DHCP)",
                    "Delivery, Forwarding and Unicast Routing protocols"
                ]
            },
            {
                "module_number": 6,
                "title": "Transport Layer & QoS",
                "topics": [
                    "Process to Process Communication",
                    "User Datagram Protocol (UDP), Transmission Control Protocol (TCP), SCTP",
                    "Congestion Control",
                    "Quality of Service (QoS) improving techniques: Leaky Bucket and Token Bucket algorithm"
                ]
            }
        ]
    },
    {
        "branch": "Computer Science & Engineering",
        "semester": 6,
        "subject_name": "Image Processing",
        "modules": [
            {
                "module_number": 1,
                "title": "Digital Image Fundamentals",
                "topics": [
                    "Steps in Digital Image Processing",
                    "Components, Elements of Visual Perception",
                    "Image Sensing and Acquisition",
                    "Image Sampling and Quantization",
                    "Relationships between pixels",
                    "Color models"
                ]
            },
            {
                "module_number": 2,
                "title": "Digital Image Formation",
                "topics": [
                    "A Simple Image Model",
                    "Geometric Model-Basic Transformation (Translation, Scaling, Rotation)",
                    "Perspective Projection",
                    "Sampling & Quantization (Uniform & Non uniform)"
                ]
            },
            {
                "module_number": 3,
                "title": "Mathematical Preliminaries",
                "topics": [
                    "Neighbour of pixels, Connectivity, Relations",
                    "Equivalence & Transitive Closure",
                    "Distance Measures, Arithmetic/Logic Operations",
                    "Fourier Transformation, Properties of 2D Fourier Transform",
                    "Discrete Fourier Transform, Discrete Cosine & Sine Transform"
                ]
            },
            {
                "module_number": 4,
                "title": "Image Enhancement",
                "topics": [
                    "Spatial Domain: Gray level transformations, Histogram processing",
                    "Spatial Filtering (Smoothing and Sharpening)",
                    "Frequency Domain: Smoothing and Sharpening frequency domain filters",
                    "Ideal, Butterworth and Gaussian filters"
                ]
            },
            {
                "module_number": 5,
                "title": "Image Restoration and Segmentation",
                "topics": [
                    "Noise models (Mean Filters, Order Statistics, Adaptive filters)",
                    "Band reject/pass Filters, Notch Filters",
                    "Inverse Filtering, Wiener filtering",
                    "Segmentation: Detection of Discontinuities (Edge Linking, Boundary detection)",
                    "Region based segmentation",
                    "Morphological processing (erosion and dilation)"
                ]
            }
        ]
    },
    {
        "branch": "Computer Science & Engineering",
        "semester": 6,
        "subject_name": "Cloud Computing",
        "modules": [
            {
                "module_number": 1,
                "title": "Introduction to Cloud Computing",
                "topics": [
                    "Emergence of cloud computing, Definition, Architecture",
                    "Cloud-Based Services, Benefits, Key Characteristics",
                    "Public & Private cloud environments",
                    "Evolution of Cloud Computing (Hardware & Internet Software)",
                    "SPI framework"
                ]
            },
            {
                "module_number": 2,
                "title": "Cloud Services",
                "topics": [
                    "Communication-as-a-Service (CAAS)",
                    "Infrastructure-as-a-Service (IAAS)",
                    "Monitoring-as-a-Service (MAAS)",
                    "Platform-as-a-Service (PAAS)",
                    "Software-as-a-Service (SAAS)"
                ]
            },
            {
                "module_number": 3,
                "title": "Cloud Security Challenges",
                "topics": [
                    "Security Management (People, Governance, Portfolio)",
                    "Security Architecture Design",
                    "Identity Access Management (IAM), Data Security",
                    "Cloud computing threats",
                    "Case studies (Amazon EC2, Google App engine, IBM clouds)"
                ]
            },
            {
                "module_number": 4,
                "title": "The MSP Model",
                "topics": [
                    "Evolution from MSP Model to Cloud Computing and SaaS",
                    "The Cloud Data Center",
                    "Basic Approach to a Data Center-Based SOA",
                    "Open Source Software",
                    "Service-Oriented Architectures as a Step Toward Cloud Computing"
                ]
            },
            {
                "module_number": 5,
                "title": "Virtualization Concepts & Smartphone",
                "topics": [
                    "Virtualization benefits, Hardware & Software Virtualization",
                    "Memory, Storage, Data, and Network Virtualization",
                    "Virtualization Security Recommendations",
                    "Introduction to Various Virtualization OS (VMware, KVM)",
                    "Mobile Operating Systems for Smartphones (iPhone, Windows Mobile, Android)"
                ]
            }
        ]
    },
    {
        "branch": "Computer Science & Engineering",
        "semester": 6,
        "subject_name": "Natural Language Processing",
        "modules": [
            {
                "module_number": 1,
                "title": "Introduction & Sound",
                "topics": [
                    "Introduction to NLP",
                    "Biology of Speech Processing",
                    "Place and Manner of Articulation",
                    "Word Boundary Detection",
                    "Argmax based computations",
                    "HMM and Speech Recognition"
                ]
            },
            {
                "module_number": 2,
                "title": "Words and Word Forms",
                "topics": [
                    "Morphology fundamentals & Diversity of Indian Languages",
                    "Morphology Paradigms, Finite State Machine Based Morphology",
                    "Automatic Morphology Learning",
                    "Shallow Parsing, Named Entities",
                    "Maximum Entropy Models, Random Fields"
                ]
            },
            {
                "module_number": 3,
                "title": "Structures",
                "topics": [
                    "Theories of Parsing, Parsing Algorithms",
                    "Robust and Scalable Parsing on Noisy Text",
                    "Hybrid of Rule Based and Probabilistic Parsing",
                    "Scope Ambiguity and Attachment Ambiguity resolution"
                ]
            },
            {
                "module_number": 4,
                "title": "Meaning",
                "topics": [
                    "Lexical Knowledge Networks, Wordnet Theory",
                    "Indian Language Wordnets and Multilingual Dictionaries",
                    "Semantic Roles, Word Sense Disambiguation (WSD)",
                    "Metaphors, Co-references"
                ]
            },
            {
                "module_number": 5,
                "title": "Web 2.0 Applications",
                "topics": [
                    "Sentiment Analysis, Named Entity Recognition",
                    "Text Entailment",
                    "Robust and Scalable Machine Translation",
                    "Question Answering in Multilingual Setting",
                    "Cross Lingual Information Retrieval (CLIR)"
                ]
            }
        ]
    },
    {
        "branch": "Computer Science & Engineering",
        "semester": 6,
        "subject_name": "System Software",
        "modules": [
            {
                "module_number": 1,
                "title": "Introduction",
                "topics": [
                    "System Software vs Application Software",
                    "Components: Assembler, Loader, Linker, Macros, Compiler",
                    "Program Development Cycle",
                    "Evolution and Functions of Operating System",
                    "Machine Structure, Memory Registers, Data, Instructions",
                    "Introduction to Assembly Language Program"
                ]
            },
            {
                "module_number": 2,
                "title": "Assemblers, Loaders and Linkers",
                "topics": [
                    "Assemblers: Basic Functions, Features, Design Options",
                    "Loaders and Linkers: Basic Functions, Machine-Dependent/Independent Features",
                    "Dynamic Linking and Loading",
                    "Object files (Code sections, Relocation, Symbols, ELF)"
                ]
            },
            {
                "module_number": 3,
                "title": "Macroprocessors and Emulators",
                "topics": [
                    "Microprocessors",
                    "Macro Processor Functions and Design Options",
                    "Introduction to Virtual Machines (VM)",
                    "Emulation: Basic Interpretation, Threaded Interpretation",
                    "Binary translation"
                ]
            },
            {
                "module_number": 4,
                "title": "Virtual Machines & Advanced Features",
                "topics": [
                    "Pascal P-Code VM, Object-Oriented VMs",
                    "Java VM Architecture, Common Language Infrastructure",
                    "Dynamic Class Loading",
                    "Instruction Set Issues, Profiling, Migration, Grids",
                    "Code optimizations, Garbage Collection"
                ]
            }
        ]
    },
    {
        "branch": "Computer Science & Engineering",
        "semester": 6,
        "subject_name": "Entrepreneurship",
        "modules": [
            {
                "module_number": 1,
                "title": "Introduction",
                "topics": [
                    "Overview of Entrepreneurs and Entrepreneurship",
                    "Definition and Concept of Entrepreneurship & Intrapreneurship",
                    "Characteristics and skills of entrepreneurs"
                ]
            },
            {
                "module_number": 2,
                "title": "Entrepreneurial Development",
                "topics": [
                    "Entrepreneurship & Economic development",
                    "Contribution of Small and big enterprises to the economy",
                    "Entrepreneurial environment",
                    "Types of Entrepreneurs"
                ]
            },
            {
                "module_number": 3,
                "title": "Developing the Business Plan",
                "topics": [
                    "Identification of Business Idea",
                    "Elements of a Business Plan",
                    "Building Competitive Advantage",
                    "Conducting feasibility Analysis",
                    "Strategy and Planning for Starting Your Small Business",
                    "Developing Marketing Strategies",
                    "Managing Human Resources"
                ]
            },
            {
                "module_number": 4,
                "title": "Sources of Finance",
                "topics": [
                    "Equity vs. Debt Capital",
                    "Sources of Equity Finance",
                    "Institutional finance",
                    "Venture Capital",
                    "Lease Finance",
                    "Obtaining the Right Financing"
                ]
            },
            {
                "module_number": 5,
                "title": "Forms of Business Ownership",
                "topics": [
                    "Forms of Ownership",
                    "Becoming an Owner",
                    "Sole Proprietorship",
                    "Partnership",
                    "Corporations and other forms of ownership"
                ]
            },
            {
                "module_number": 6,
                "title": "Intellectual Property Management",
                "topics": [
                    "Importance of Innovation",
                    "Patents & trademarks in small businesses",
                    "Introduction to laws relating to IPR in India"
                ]
            },
            {
                "module_number": 7,
                "title": "Institutional support for small businesses in India",
                "topics": [
                    "Support in areas of technology",
                    "Finance inputs & infrastructure",
                    "Marketing",
                    "Entrepreneurship development"
                ]
            }
        ]
    }
];

const itSem6Data = [
    {
        "branch": "Information Technology",
        "semester": 6,
        "subject_name": "Computer Networks",
        "modules": [
            {
                "module_number": 1,
                "title": "Data Communication Components",
                "topics": [
                    "Representation of data and its flow",
                    "Networks, Various Connection Topology",
                    "Protocols and Standards",
                    "OSI model",
                    "Transmission Media"
                ]
            },
            {
                "module_number": 2,
                "title": "LAN & Bandwidth Utilization",
                "topics": [
                    "Wired LAN, Wireless LANs",
                    "Connecting LAN and Virtual LAN",
                    "Techniques for Bandwidth utilization: Multiplexing (Frequency, Time, Wave division)",
                    "Concepts on spread spectrum"
                ]
            },
            {
                "module_number": 3,
                "title": "Data Link Layer",
                "topics": [
                    "Error Detection and Error Correction",
                    "Fundamentals, Block coding",
                    "Hamming Distance",
                    "CRC"
                ]
            },
            {
                "module_number": 4,
                "title": "Flow & Error Control Protocols",
                "topics": [
                    "Stop and Wait, Go back - N ARQ, Selective Repeat ARQ",
                    "Sliding Window, Piggybacking",
                    "Random Access, Multiple access protocols (Pure ALOHA, Slotted ALOHA, CSMA/CD, CDMA/CA)"
                ]
            },
            {
                "module_number": 5,
                "title": "Network Layer",
                "topics": [
                    "Switching, Logical addressing IPV4, IPV6",
                    "Address mapping (ARP, RARP, BOOTP, DHCP)",
                    "Delivery, Forwarding and Unicast Routing protocols"
                ]
            },
            {
                "module_number": 6,
                "title": "Transport Layer & QoS",
                "topics": [
                    "Process to Process Communication",
                    "User Datagram Protocol (UDP), Transmission Control Protocol (TCP), SCTP",
                    "Congestion Control",
                    "Quality of Service (QoS) improving techniques: Leaky Bucket and Token Bucket algorithm"
                ]
            }
        ]
    },
    {
        "branch": "Information Technology",
        "semester": 6,
        "subject_name": "Image Processing",
        "modules": [
            {
                "module_number": 1,
                "title": "Digital Image Fundamentals",
                "topics": [
                    "Steps in Digital Image Processing",
                    "Components, Elements of Visual Perception",
                    "Image Sensing and Acquisition",
                    "Image Sampling and Quantization",
                    "Relationships between pixels",
                    "Color models"
                ]
            },
            {
                "module_number": 2,
                "title": "Digital Image Formation",
                "topics": [
                    "A Simple Image Model",
                    "Geometric Model-Basic Transformation (Translation, Scaling, Rotation)",
                    "Perspective Projection",
                    "Sampling & Quantization (Uniform & Non uniform)"
                ]
            },
            {
                "module_number": 3,
                "title": "Mathematical Preliminaries",
                "topics": [
                    "Neighbour of pixels, Connectivity, Relations",
                    "Equivalence & Transitive Closure",
                    "Distance Measures, Arithmetic/Logic Operations",
                    "Fourier Transformation, Properties of 2D Fourier Transform",
                    "Discrete Fourier Transform, Discrete Cosine & Sine Transform"
                ]
            },
            {
                "module_number": 4,
                "title": "Image Enhancement",
                "topics": [
                    "Spatial Domain: Gray level transformations, Histogram processing",
                    "Spatial Filtering (Smoothing and Sharpening)",
                    "Frequency Domain: Smoothing and Sharpening frequency domain filters",
                    "Ideal, Butterworth and Gaussian filters"
                ]
            },
            {
                "module_number": 5,
                "title": "Image Restoration and Segmentation",
                "topics": [
                    "Noise models (Mean Filters, Order Statistics, Adaptive filters)",
                    "Band reject/pass Filters, Notch Filters",
                    "Inverse Filtering, Wiener filtering",
                    "Segmentation: Detection of Discontinuities (Edge Linking, Boundary detection)",
                    "Region based segmentation",
                    "Morphological processing (erosion and dilation)"
                ]
            }
        ]
    },
    {
        "branch": "Information Technology",
        "semester": 6,
        "subject_name": "Cloud Computing",
        "modules": [
            {
                "module_number": 1,
                "title": "Introduction to Cloud Computing",
                "topics": [
                    "Emergence of cloud computing, Definition, Architecture",
                    "Cloud-Based Services, Benefits, Key Characteristics",
                    "Public & Private cloud environments",
                    "Evolution of Cloud Computing (Hardware & Internet Software)",
                    "SPI framework"
                ]
            },
            {
                "module_number": 2,
                "title": "Cloud Services",
                "topics": [
                    "Communication-as-a-Service (CAAS)",
                    "Infrastructure-as-a-Service (IAAS)",
                    "Monitoring-as-a-Service (MAAS)",
                    "Platform-as-a-Service (PAAS)",
                    "Software-as-a-Service (SAAS)"
                ]
            },
            {
                "module_number": 3,
                "title": "Cloud Security Challenges",
                "topics": [
                    "Security Management (People, Governance, Portfolio)",
                    "Security Architecture Design",
                    "Identity Access Management (IAM), Data Security",
                    "Cloud computing threats",
                    "Case studies (Amazon EC2, Google App engine, IBM clouds)"
                ]
            },
            {
                "module_number": 4,
                "title": "The MSP Model",
                "topics": [
                    "Evolution from MSP Model to Cloud Computing and SaaS",
                    "The Cloud Data Center",
                    "Basic Approach to a Data Center-Based SOA",
                    "Open Source Software",
                    "Service-Oriented Architectures as a Step Toward Cloud Computing"
                ]
            },
            {
                "module_number": 5,
                "title": "Virtualization Concepts & Smartphone",
                "topics": [
                    "Virtualization benefits, Hardware & Software Virtualization",
                    "Memory, Storage, Data, and Network Virtualization",
                    "Virtualization Security Recommendations",
                    "Introduction to Various Virtualization OS (VMware, KVM)",
                    "Mobile Operating Systems for Smartphones (iPhone, Windows Mobile, Android)"
                ]
            }
        ]
    },
    {
        "branch": "Information Technology",
        "semester": 6,
        "subject_name": "Natural Language Processing",
        "modules": [
            {
                "module_number": 1,
                "title": "Introduction & Sound",
                "topics": [
                    "Introduction to NLP",
                    "Biology of Speech Processing",
                    "Place and Manner of Articulation",
                    "Word Boundary Detection",
                    "Argmax based computations",
                    "HMM and Speech Recognition"
                ]
            },
            {
                "module_number": 2,
                "title": "Words and Word Forms",
                "topics": [
                    "Morphology fundamentals & Diversity of Indian Languages",
                    "Morphology Paradigms, Finite State Machine Based Morphology",
                    "Automatic Morphology Learning",
                    "Shallow Parsing, Named Entities",
                    "Maximum Entropy Models, Random Fields"
                ]
            },
            {
                "module_number": 3,
                "title": "Structures",
                "topics": [
                    "Theories of Parsing, Parsing Algorithms",
                    "Robust and Scalable Parsing on Noisy Text",
                    "Hybrid of Rule Based and Probabilistic Parsing",
                    "Scope Ambiguity and Attachment Ambiguity resolution"
                ]
            },
            {
                "module_number": 4,
                "title": "Meaning",
                "topics": [
                    "Lexical Knowledge Networks, Wordnet Theory",
                    "Indian Language Wordnets and Multilingual Dictionaries",
                    "Semantic Roles, Word Sense Disambiguation (WSD)",
                    "Metaphors, Co-references"
                ]
            },
            {
                "module_number": 5,
                "title": "Web 2.0 Applications",
                "topics": [
                    "Sentiment Analysis, Named Entity Recognition",
                    "Text Entailment",
                    "Robust and Scalable Machine Translation",
                    "Question Answering in Multilingual Setting",
                    "Cross Lingual Information Retrieval (CLIR)"
                ]
            }
        ]
    },
    {
        "branch": "Information Technology",
        "semester": 6,
        "subject_name": "E-Commerce",
        "modules": [
            {
                "module_number": 1,
                "title": "Introduction",
                "topics": [
                    "Forces behind E-Commerce, E-Commerce Industry Framework",
                    "Inter/Intra Organizational E-Commerce",
                    "Consumer to Business Electronic Commerce",
                    "Architectural framework, Logical layers of E-commerce"
                ]
            },
            {
                "module_number": 2,
                "title": "Electronic Payment System",
                "topics": [
                    "Digital token-based electronic payment systems",
                    "Smart cards & credit card based electronic payment systems",
                    "Electronic cheque, e-cash",
                    "Risk and solution in electronic payment systems"
                ]
            },
            {
                "module_number": 3,
                "title": "Information Distribution and Messaging",
                "topics": [
                    "FTP, E-Mail, www server, HTTP",
                    "Web service implementation, Information publishing",
                    "Electronic data interchange (EDI): technology, standards, implementation"
                ]
            },
            {
                "module_number": 4,
                "title": "E-Business",
                "topics": [
                    "Supply chain management",
                    "Internet bookshop, Software supplies & support",
                    "E-payment system, Internet banking",
                    "Gambling on net, E-diversity"
                ]
            },
            {
                "module_number": 5,
                "title": "Legal and Security Issues",
                "topics": [
                    "Paper Vs Electronic document, Authentication of E-document",
                    "Legal issues: Copyright & jurisdiction",
                    "Security solutions: Symmetric & asymmetric cryptography, DES, RSA",
                    "Digital signature, Protocols for securing message, SET"
                ]
            }
        ]
    },
    {
        "branch": "Information Technology",
        "semester": 6,
        "subject_name": "Entrepreneurship",
        "modules": [
            {
                "module_number": 1,
                "title": "Introduction",
                "topics": [
                    "Overview of Entrepreneurs and Entrepreneurship",
                    "Definition and Concept of Entrepreneurship & Intrapreneurship",
                    "Characteristics and skills of entrepreneurs"
                ]
            },
            {
                "module_number": 2,
                "title": "Entrepreneurial Development",
                "topics": [
                    "Entrepreneurship & Economic development",
                    "Contribution of Small and big enterprises to the economy",
                    "Entrepreneurial environment",
                    "Types of Entrepreneurs"
                ]
            },
            {
                "module_number": 3,
                "title": "Developing the Business Plan",
                "topics": [
                    "Identification of Business Idea",
                    "Elements of a Business Plan",
                    "Building Competitive Advantage",
                    "Conducting feasibility Analysis",
                    "Strategy and Planning for Starting Your Small Business",
                    "Developing Marketing Strategies",
                    "Managing Human Resources"
                ]
            },
            {
                "module_number": 4,
                "title": "Sources of Finance",
                "topics": [
                    "Equity vs. Debt Capital",
                    "Sources of Equity Finance",
                    "Institutional finance",
                    "Venture Capital",
                    "Lease Finance",
                    "Obtaining the Right Financing"
                ]
            },
            {
                "module_number": 5,
                "title": "Forms of Business Ownership",
                "topics": [
                    "Forms of Ownership",
                    "Becoming an Owner",
                    "Sole Proprietorship",
                    "Partnership",
                    "Corporations and other forms of ownership"
                ]
            },
            {
                "module_number": 6,
                "title": "Intellectual Property Management",
                "topics": [
                    "Importance of Innovation",
                    "Patents & trademarks in small businesses",
                    "Introduction to laws relating to IPR in India"
                ]
            },
            {
                "module_number": 7,
                "title": "Institutional support for small businesses in India",
                "topics": [
                    "Support in areas of technology",
                    "Finance inputs & infrastructure",
                    "Marketing",
                    "Entrepreneurship development"
                ]
            }
        ]
    }
];

const eceSem6Data = [
    {
        "branch": "Electronics & Communication Engineering",
        "semester": 6,
        "subject_name": "VLSI Design",
        "modules": [
            {
                "module_number": 1,
                "title": "Introduction to MOS",
                "topics": ["MOSFET characteristics and scaling", "MOS inverters and current mirrors", "CMOS Operational Amplifier design"]
            },
            {
                "module_number": 2,
                "title": "Analog Filters and Interconnects",
                "topics": ["Switched capacitor filters", "ADC and DAC converters", "VLSI Interconnects (RC models)"]
            },
            {
                "module_number": 3,
                "title": "Digital VLSI Design",
                "topics": ["CMOS Inverter switching characteristics", "CMOS Logic Gates (NAND, NOR, XOR)", "Pass transistor and transmission gates"]
            },
            {
                "module_number": 4,
                "title": "Sequential and Dynamic Logic",
                "topics": ["CMOS Latches and Flip-flops", "Schmitt trigger", "Dynamic Logic Circuits"]
            },
            {
                "module_number": 5,
                "title": "Semiconductor Memories",
                "topics": ["SRAM and DRAM circuits", "ROM circuits", "Flash memory"]
            }
        ]
    },
    {
        "branch": "Electronics & Communication Engineering",
        "semester": 6,
        "subject_name": "Digital Signal Processing",
        "modules": [
            {
                "module_number": 1,
                "title": "Signals and Systems",
                "topics": ["Discrete time signals and systems", "Z-transform and Convolution", "Sampling Theorem"]
            },
            {
                "module_number": 2,
                "title": "Frequency Transformations",
                "topics": ["DFT and its properties", "FFT Algorithms (DIT, DIF)", "DCT and its applications"]
            },
            {
                "module_number": 3,
                "title": "IIR Filter Design",
                "topics": ["Impulse Invariance method", "Bilinear Transformation", "Butterworth and Chebyshev filters"]
            },
            {
                "module_number": 4,
                "title": "FIR Filter Design",
                "topics": ["Windowing techniques (Rectangular, Hamming, Hanning)", "Frequency sampling method", "Linear phase FIR filters"]
            },
            {
                "module_number": 5,
                "title": "Finite Word Length Effects",
                "topics": ["Quantization noise", "Limit cycle oscillations", "Overflow error and scaling"]
            }
        ]
    },
    {
        "branch": "Electronics & Communication Engineering",
        "semester": 6,
        "subject_name": "Entrepreneurship",
        "modules": [
            {
                "module_number": 1,
                "title": "Introduction",
                "topics": ["Concept of Entrepreneurship & Intrapreneurship", "Characteristics and skills of entrepreneurs"]
            },
            {
                "module_number": 2,
                "title": "Entrepreneurial Development",
                "topics": ["Economic development contribution", "Types of Entrepreneurs", "Entrepreneurial environment"]
            },
            {
                "module_number": 3,
                "title": "Developing the Business Plan",
                "topics": ["Business Idea Identification", "Feasibility Analysis", "Marketing Strategies", "Human Resource Management"]
            },
            {
                "module_number": 4,
                "title": "Sources of Finance",
                "topics": ["Equity vs Debt Capital", "Venture Capital", "Institutional Finance"]
            },
            {
                "module_number": 5,
                "title": "Forms of Business Ownership",
                "topics": ["Sole Proprietorship", "Partnership", "Corporations"]
            },
            {
                "module_number": 6,
                "title": "Intellectual Property Management",
                "topics": ["Patents & Trademarks", "IPR Laws in India"]
            },
            {
                "module_number": 7,
                "title": "Institutional Support",
                "topics": ["Support in technology, finance, and marketing", "Government schemes for small businesses"]
            }
        ]
    },
    {
        "branch": "Electronics & Communication Engineering",
        "semester": 6,
        "subject_name": "Digital Image Processing",
        "modules": [
            {
                "module_number": 1,
                "title": "Introduction & Fundamentals",
                "topics": [
                    "Digital Image Representation, Fundamental Steps in Image Processing",
                    "Elements of Visual Perception, Simple Image model",
                    "Sampling and Quantization, Neighborhood of Pixels, Pixel Connectivity",
                    "Distance Measures, Arithmetic and Logic Operations",
                    "Image Transformations, Perspective Transformations, Stereo Imaging"
                ]
            },
            {
                "module_number": 2,
                "title": "Image Enhancement",
                "topics": [
                    "Spatial Domain Methods: Point processing, Intensity Transformations, Histogram Processing",
                    "Spatial filtering: Smoothing Filters, Sharpening Filters",
                    "Frequency Domain Methods: Low Pass Filtering, High Pass Filtering, Homomorphic filtering"
                ]
            },
            {
                "module_number": 3,
                "title": "Wavelets & Compression",
                "topics": [
                    "Wavelets: Sub band Coding, Haar Transform, Multi resolution Series Expansions",
                    "Discrete Wavelet Transform (1D & 2D), Fast Wavelet Transform, Wavelet Packets",
                    "Image Compression: Fundamentals, Compression Model, Error free Compression",
                    "Lossy Predictive Coding, Transform Coding"
                ]
            },
            {
                "module_number": 4,
                "title": "Segmentation & Representation",
                "topics": [
                    "Image Segmentation: Detection of Discontinuities (Line, Edge)",
                    "Edge Linking and Boundary Detection, Thresholding",
                    "Region Growing, Region Splitting and Merging",
                    "Image Representation: Chain Codes, Polygonal Approximations, Signatures, Skeleton",
                    "Boundary Descriptions, Shape Numbers, Fourier descriptors, Moments"
                ]
            },
            {
                "module_number": 5,
                "title": "Recognition & Interpretation",
                "topics": [
                    "Elements of Image Analysis, Pattern and Pattern Classes",
                    "Minimum Distance Classifier, Matching by Correlation",
                    "Bayes Classifier, Neural Network Training Algorithm",
                    "Structural methods"
                ]
            }
        ]
    },
    {
        "branch": "Electronics & Communication Engineering",
        "semester": 6,
        "subject_name": "Microwave Engineering",
        "modules": [
            {
                "module_number": 1,
                "title": "Introduction",
                "topics": [
                    "RF and microwave spectrum, historical background",
                    "Impedance Matching: Unknown Impedance measurement using shift in minima technique",
                    "Single and double stub matching"
                ]
            },
            {
                "module_number": 2,
                "title": "Microwave Waveguides and Components",
                "topics": [
                    "Rectangular and circular waveguides: mode structure, cutoff frequency, attenuation",
                    "Microwave cavities: rectangular cavity resonator, Q factor",
                    "Scattering matrix and transmission matrix",
                    "Components: Attenuator, Phase shifter, Directional coupler, Magic tee, Hybrid ring, Circulator, Isolator"
                ]
            },
            {
                "module_number": 3,
                "title": "Planar Structures & Tubes",
                "topics": [
                    "Planar structures: Strip line, microstrip line, coplanar structure",
                    "Microwave Tubes: Klystron (Multicavity & Reflex), Magnetron, TWT, BWO",
                    "Semiconductor Microwave Devices: Tunnel diode, Gunn diode and waveguide mounts"
                ]
            },
            {
                "module_number": 4,
                "title": "Solid State Devices",
                "topics": [
                    "Avalanche diodes: IMPATT, TRAPATT",
                    "Microwave bipolar transistor, heterojunction bipolar transistor",
                    "Microwave FET: JFET, MOSFET, MESFET",
                    "Industrial Applications of microwave"
                ]
            },
            {
                "module_number": 5,
                "title": "Microwave Measurement",
                "topics": [
                    "VSWR, power, Impedance, and frequency Measurement",
                    "Equivalent RF circuit parameters: Low pass, high pass, band pass filters",
                    "RF amplifier"
                ]
            }
        ]
    }
];

const cseSem7Data = [
    {
        "branch": "Computer Science & Engineering",
        "semester": 7,
        "subject_name": "Artificial Intelligence",
        "modules": [
            {
                "module_number": 1,
                "title": "Introduction",
                "topics": [
                    "Overview of AI, Problems of AI, AI techniques",
                    "Problem Solving, Problem Space and Search",
                    "Defining the problem as state space search",
                    "Tic-Tac-Toe Problem",
                    "AI languages (Prolog and Lisp)"
                ]
            },
            {
                "module_number": 2,
                "title": "Basic Search Techniques",
                "topics": [
                    "Solving Problems by searching",
                    "Uniform search strategies: Breadth first search, depth first search",
                    "Depth limited search, bidirectional search",
                    "Comparing search strategies in terms of complexity"
                ]
            },
            {
                "module_number": 3,
                "title": "Special Search Techniques & Symbolic Logic",
                "topics": [
                    "Heuristic Search, greedy best-first search, A* search",
                    "Hill climbing search, Simulated Annealing search",
                    "Genetic Algorithm, Constraint Satisfaction Problems",
                    "Adversarial search: Games, Minimax search, Alpha-beta pruning",
                    "Syntax and semantics for propositional logic and FOPL",
                    "Clausal form, Unification, Resolution"
                ]
            },
            {
                "module_number": 4,
                "title": "Reasoning Under Inconsistencies and Uncertainties",
                "topics": [
                    "Non-monotonic reasoning, Truth Maintenance System",
                    "Default Reasoning & closed world assumption",
                    "Predicate completion and circumscription, Fuzzy Logic",
                    "Bayesian probabilistic inference",
                    "Bayesian networks, Dempster-Shafer theory"
                ]
            },
            {
                "module_number": 5,
                "title": "Structured Knowledge & Expert Systems",
                "topics": [
                    "Associative networks, Conceptual graphs, Frames structures",
                    "Expert Systems: Rule based systems, Non production systems",
                    "Decision tree architectures, black board system architecture",
                    "Learning by induction; generalization, specialization"
                ]
            }
        ]
    },
    {
        "branch": "Computer Science & Engineering",
        "semester": 7,
        "subject_name": "Cryptography",
        "modules": [
            {
                "module_number": 1,
                "title": "Conventional Encryption",
                "topics": [
                    "Conventional Encryption Principles",
                    "Conventional Encryption Algorithms",
                    "Location of Encryption Devices",
                    "Key Distribution"
                ]
            },
            {
                "module_number": 2,
                "title": "Public Key Cryptography & Message Authentication",
                "topics": [
                    "Approaches to Message Authentication",
                    "SHA-1, MD5",
                    "Public key cryptography Principles",
                    "RSA, Digital Signatures",
                    "Key Management"
                ]
            },
            {
                "module_number": 3,
                "title": "Network Security Applications",
                "topics": [
                    "Kerberos Motivation",
                    "Kerberos version 4",
                    "PGP Notation",
                    "PGP Operational Description"
                ]
            },
            {
                "module_number": 4,
                "title": "IP & Web Security",
                "topics": [
                    "IP Security Overview and Architecture",
                    "Authentication Header",
                    "Web Security Threats",
                    "Web Traffic Security Approaches",
                    "Overview of Secure Socket Layer (SSL) and Transport Layer Security (TLS)",
                    "Overview of Secure Electronic Transaction (SET)"
                ]
            },
            {
                "module_number": 5,
                "title": "Intruders, Viruses & Firewalls",
                "topics": [
                    "Intruders, Intrusion Techniques",
                    "Password Protection, Intrusion Detection",
                    "Malicious Programs, Nature of viruses, Macro viruses, Antivirus Approaches",
                    "Firewall characteristics, Types of Firewalls, Firewall configuration"
                ]
            }
        ]
    },
    {
        "branch": "Computer Science & Engineering",
        "semester": 7,
        "subject_name": "Data Mining and Data Warehousing",
        "modules": [
            {
                "module_number": 1,
                "title": "Introduction",
                "topics": [
                    "Data warehousing definitions and characteristics",
                    "Multi-dimensional data model, Warehouse schema",
                    "Data Marts: types, loading, metadata, data model",
                    "Maintenance, nature of data, software components",
                    "Monitoring requirements and security in a data mart"
                ]
            },
            {
                "module_number": 2,
                "title": "Online Analytical Processing",
                "topics": [
                    "OLTP and OLAP systems",
                    "Data Modeling, LAP tools",
                    "Star schema for multi dimensional view, snowflake schema",
                    "OLAP tools"
                ]
            },
            {
                "module_number": 3,
                "title": "Developing a Data Warehousing",
                "topics": [
                    "Building of a Data Warehousing",
                    "Architectural strategies & organizational issues",
                    "Design considerations, data content, distribution of data",
                    "Tools for Data Warehousing"
                ]
            },
            {
                "module_number": 4,
                "title": "Data Mining & Association Rules",
                "topics": [
                    "Definitions; KDD versus Data Mining",
                    "DBMS versus Data Mining",
                    "Issues and challenges",
                    "Association Rules: Apriori algorithms",
                    "Partition algorithm, Dynamic itemset counting algorithm",
                    "FP-tree growth algorithm, Generalized association rule"
                ]
            },
            {
                "module_number": 5,
                "title": "Clustering Techniques & Decision Trees",
                "topics": [
                    "Clustering paradigm, Partition algorithms",
                    "CLARA, CLARANS, Hierarchical clustering, DBSCAN, BIRCH, CURE",
                    "Categorical Clustering (STIRR, ROCK, CACTUS)",
                    "Decision Trees: Tree construction principle, Best split, Splitting indices/criteria"
                ]
            },
            {
                "module_number": 6,
                "title": "Web Mining",
                "topics": [
                    "Web content Mining",
                    "Web structure Mining",
                    "Web usage Mining",
                    "Text mining"
                ]
            },
            {
                "module_number": 7,
                "title": "Temporal and Spatial Data Mining",
                "topics": [
                    "Basic concepts of temporal data mining",
                    "The GSP algorithm",
                    "SPADE, SPIRIT, WUM"
                ]
            }
        ]
    },
    {
        "branch": "Computer Science & Engineering",
        "semester": 7,
        "subject_name": "Machine Learning",
        "modules": [
            {
                "module_number": 1,
                "title": "Introduction",
                "topics": [
                    "Basic principal, Utility of ML",
                    "Well defined learning system",
                    "Designing learning system",
                    "Challenges in ML, Application of ML"
                ]
            },
            {
                "module_number": 2,
                "title": "Regression, Classification & Bayesian Learning",
                "topics": [
                    "Linear Regression (single and multiple variables), Gradient Descent",
                    "Logistic Regression, Over fitting, Regularization",
                    "Support Vector Machines (SVM)",
                    "Decision Trees and issues",
                    "Bayes Theorem, Concept Learning, Bayes Optimal Classifier",
                    "Naïve Bayes Classifier, Bayesian Belief Networks, EM Algorithm"
                ]
            },
            {
                "module_number": 3,
                "title": "Clustering & Dimensionality Reduction",
                "topics": [
                    "Clustering: K-means, Hierarchical",
                    "Dimensionality reduction: Principal Component Analysis (PCA)",
                    "Anomaly detection",
                    "Feasibility of learning",
                    "Reinforcement learning"
                ]
            },
            {
                "module_number": 4,
                "title": "Artificial Neural Networks",
                "topics": [
                    "Artificial Perceptrons, Gradient Descent and The Delta Rule",
                    "Adaline, Multilayer Networks",
                    "Back-propagation Rule and Algorithm",
                    "Convergence"
                ]
            },
            {
                "module_number": 5,
                "title": "Evolutionary Algorithms",
                "topics": [
                    "Genetic Algorithms: An Illustrative Example",
                    "Hypothesis Space Search",
                    "Genetic Programming",
                    "Swarm intelligence algorithm"
                ]
            }
        ]
    },
    {
        "branch": "Computer Science & Engineering",
        "semester": 7,
        "subject_name": "Software Engineering",
        "modules": [
            {
                "module_number": 1,
                "title": "Introduction to Software Engineering",
                "topics": [
                    "The evolving role of software, Changing Nature of Software",
                    "Legacy software, Software myths",
                    "Software engineering- A layered technology",
                    "A process framework",
                    "The Capability Maturity Model Integration (CMMI)"
                ]
            },
            {
                "module_number": 2,
                "title": "Process Models",
                "topics": [
                    "Process patterns, process assessment",
                    "The waterfall model",
                    "Incremental process models",
                    "Evolutionary process models",
                    "Specialized process models",
                    "The Unified process"
                ]
            },
            {
                "module_number": 3,
                "title": "Software Requirements",
                "topics": [
                    "Functional and non-functional requirements",
                    "User requirements, System requirements",
                    "Interface specification, the software requirements document",
                    "Feasibility studies",
                    "Requirements elicitation and analysis"
                ]
            },
            {
                "module_number": 4,
                "title": "Requirements Validation & System Models",
                "topics": [
                    "Requirements validation, Requirements management",
                    "Context Models",
                    "Behavioral models",
                    "Data models, Object models",
                    "Structured methods"
                ]
            },
            {
                "module_number": 5,
                "title": "Design Engineering",
                "topics": [
                    "Design process and Design quality, Design concepts",
                    "Software architecture, Data design, Architectural styles",
                    "Assessing alternative architectural designs",
                    "Designing class-based components",
                    "User interface design: Golden rules, interface analysis, interface design steps"
                ]
            }
        ]
    }
];

const eceSem7Data = [
    {
        "branch": "Electronics & Communication Engineering",
        "semester": 7,
        "subject_name": "Antenna & Wave Propagation",
        "modules": [
            {
                "module_number": 1,
                "title": "Antenna Fundamentals",
                "topics": [
                    "Scalar electric potential, vector magnetic potential",
                    "Radiation from an alternating current element",
                    "Power radiated by a current element and radiation resistance",
                    "Radiation from half wave dipole and quarter wave monopole",
                    "Isotropic radiator and network theorems applied to antennas"
                ]
            },
            {
                "module_number": 2,
                "title": "Antenna Parameters",
                "topics": [
                    "Radiation pattern, field pattern, Radiation Intensity",
                    "Antenna Impedance, gain, directivity, bandwidth, Polarization, efficiency",
                    "Effective length, scattering loss, collecting aperture, physical aperture",
                    "Relation between large aperture and gain",
                    "Friss Transmission formula, Radar range equation"
                ]
            },
            {
                "module_number": 3,
                "title": "Design of Arrays",
                "topics": [
                    "N-element linear array: broadside array, End fire array",
                    "Multiplication of patterns",
                    "Effect of earth on vertical pattern",
                    "Mutual Impedance effects",
                    "Binomial arrays"
                ]
            },
            {
                "module_number": 4,
                "title": "Practical Antennas & Measurement",
                "topics": [
                    "VLF, LF, MF transmitting antennas, resonant & non-resonant antennas",
                    "V antenna, travelling wave antenna, Rhombic antenna",
                    "VHF & UHF antennas: Horn, Folded dipole, Yagi-Uda",
                    "Reflector antennas: Parabolic, Corner reflector",
                    "Micro strip Antennas",
                    "Measurement of impedance, pattern, beam width, gain, and polarization"
                ]
            },
            {
                "module_number": 5,
                "title": "Wave Propagation",
                "topics": [
                    "Types of wave propagation",
                    "Space wave propagation",
                    "Line of sight distance for flat and curved surfaces"
                ]
            }
        ]
    },
    {
        "branch": "Electronics & Communication Engineering",
        "semester": 7,
        "subject_name": "Biomedical Instrumentation",
        "modules": [
            {
                "module_number": 1,
                "title": "Basic System & Transducers",
                "topics": [
                    "Static and dynamic characteristics of medical Instruments",
                    "Bio-signals characteristics and measurement problems",
                    "Bio-Potential Electrodes: Surface, Needle, Micro Electrodes",
                    "Transducers for pressure and body temperature measurement"
                ]
            },
            {
                "module_number": 2,
                "title": "Cardiac & Neurological Measurements",
                "topics": [
                    "Electrical Conduction system of the heart",
                    "Electrocardiograph (ECG): Block diagram, leads, Einthoven triangle",
                    "EEG 10-20 lead system",
                    "Interpretation of ECG, EEG, and EMG"
                ]
            },
            {
                "module_number": 3,
                "title": "Blood Flow & Pressure",
                "topics": [
                    "Electromagnetic blood flow meter",
                    "Ultrasonic Doppler blood flow meter",
                    "Ultrasonic blood pressure monitoring"
                ]
            },
            {
                "module_number": 4,
                "title": "Assist Devices & Monitoring",
                "topics": [
                    "Pacemakers and Defibrillators (External & Internal)",
                    "Hemodialysis machine",
                    "Spirometry, Ventilators",
                    "Arrhythmia Monitor, Foetal Monitor, and Incubator"
                ]
            },
            {
                "module_number": 5,
                "title": "Medical Imaging & Safety",
                "topics": [
                    "X-ray generation and machine",
                    "Computed Tomography (CT)",
                    "Ultrasound Imaging system",
                    "Electric shock hazards and Leakage currents",
                    "Test Instruments for safety parameters"
                ]
            }
        ]
    },
    {
        "branch": "Electronics & Communication Engineering",
        "semester": 7,
        "subject_name": "Optical Fiber Communication",
        "modules": [
            {
                "module_number": 1,
                "title": "Introduction",
                "topics": ["Ray Theory analysis", "SMF and MMF", "Optical transmitters (LED, Laser)", "Modulation bandwidths"]
            },
            {
                "module_number": 2,
                "title": "Fiber Optic Receivers",
                "topics": ["PIN and APD photodiodes", "Receiver sensitivity", "Eye Diagram"]
            },
            {
                "module_number": 3,
                "title": "Transmission Characteristics",
                "topics": ["Attenuation and Dispersion", "Power budget calculations", "Coupling mechanisms"]
            },
            {
                "module_number": 4,
                "title": "WDM and Optical Networks",
                "topics": ["WDM MUX/DEMUX", "Optical Amplifiers (EDFA)", "Optical Isolators and Circulators"]
            },
            {
                "module_number": 5,
                "title": "Advanced Systems",
                "topics": ["Coherent detection", "SONET/SDH", "Fiber optic networks (LAN, MAN, WAN)"]
            }
        ]
    },
    {
        "branch": "Electronics & Communication Engineering",
        "semester": 7,
        "subject_name": "Satellite Communication",
        "modules": [
            {
                "module_number": 1,
                "title": "Introduction & Orbital Mechanics",
                "topics": [
                    "GEO, MEO, and LEO satellite systems, frequency bands",
                    "Orbit Equations, Locating satellite w.r.t. earth",
                    "Look Angles, Orbital perturbation, Effects of earth's oblateness",
                    "Satellite eclipse, sun transit outage, Launching procedures"
                ]
            },
            {
                "module_number": 2,
                "title": "Satellite Subsystems",
                "topics": [
                    "Attitude and Orbit Control System (AOCS)",
                    "Telemetry, Tracking and Command System (TT&C)",
                    "Power System",
                    "Satellite antennas",
                    "Communications subsystem and transponders"
                ]
            },
            {
                "module_number": 3,
                "title": "Satellite Link Design",
                "topics": [
                    "Basic transmission theory",
                    "System noise temperature and G/T ratio",
                    "CNR, CIR, ACI, IMI",
                    "Down link and Up link design",
                    "System design examples"
                ]
            },
            {
                "module_number": 4,
                "title": "Modulation & Multiple Access",
                "topics": [
                    "FM with multiplexed telephone signals, Analog FM SCPC",
                    "PSK, QPSK modulation",
                    "Multiple Access: FDMA, TDMA (Frame structure, synchronization)",
                    "CDMA, Spread spectrum transmission",
                    "Error Control: Block codes, Convolution codes"
                ]
            },
            {
                "module_number": 5,
                "title": "VSAT & LEO Systems",
                "topics": [
                    "VSAT Systems: Network architectures, Access control",
                    "LEO Satellite systems: Orbits, Coverage, Delay and throughput",
                    "NGSO constellation design"
                ]
            }
        ]
    },
    {
        "branch": "Electronics & Communication Engineering",
        "semester": 7,
        "subject_name": "Value and Ethics",
        "modules": [
            {
                "module_number": 1,
                "title": "Science, Technology & Society",
                "topics": [
                    "Science/Engineering as Social and Professional Activities",
                    "Effects of Technological Growth: Depletion of resources",
                    "Reports of the Club of Rome",
                    "Sustainable development and Energy Crisis"
                ]
            },
            {
                "module_number": 2,
                "title": "Environment & Technology Transfer",
                "topics": [
                    "Environmental degradation, pollution, and regulations",
                    "Appropriate Technology Movement of Schumacher",
                    "Problems of Technology transfer and assessment",
                    "Human Operator in Engineering projects",
                    "Problems of man-machine interaction and automation"
                ]
            },
            {
                "module_number": 3,
                "title": "Ethics of Profession",
                "topics": [
                    "Engineering profession: Ethical Issues in practice",
                    "Conflicts between business demands and professional ideals",
                    "Social and ethical responsibilities",
                    "Codes of professional ethics",
                    "Whistle blowing and Case studies"
                ]
            },
            {
                "module_number": 4,
                "title": "Values in Society",
                "topics": [
                    "Values Crisis in contemporary society",
                    "Nature of values: Psychological values (Mental health)",
                    "Societal values: Justice, democracy, secularism, rule of law",
                    "Aesthetic values: Perception of beauty and simplicity"
                ]
            },
            {
                "module_number": 5,
                "title": "Moral and Ethical Values",
                "topics": [
                    "Nature of moral judgements",
                    "Canons of ethics",
                    "Ethics of virtue",
                    "Ethics of duty",
                    "Ethics of responsibility"
                ]
            }
        ]
    }
];

// Utility function to sort an array of subject objects by 'subject_name'
function sortSubjectsByName(dataArray) {
    return dataArray.sort((a, b) => {
        const subjectA = a.subject_name.toUpperCase(); // ignore upper and lowercase
        const subjectB = b.subject_name.toUpperCase(); // ignore upper and lowercase
        if (subjectA < subjectB) {
            return -1;
        }
        if (subjectA > subjectB) {
            return 1;
        }
        return 0;
    });
}

// --- 2. THE SCRIPT LOGIC ---

const SubjectSchema = new mongoose.Schema({
    branch: String,
    semester: Number,
    subject_name: String,
    modules: [{ module_number: Number, title: String, topics: [String] }]
});

const Subject = mongoose.models.Subject || mongoose.model('Subject', SubjectSchema);

async function seed() {
    if (!process.env.MONGODB_URI) {
        console.error("❌ Error: MONGODB_URI is missing in .env.local");
        process.exit(1);
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("✅ Connected to DB. Clearing old data...");

        await Subject.deleteMany({});

        console.log("🔄 Generating IT Data...");

        // IT Sem 1-5, 7 is same as CSE Sem 1-5, 7
        const itSem1 = cseSem1Data.map(sub => ({ ...sub, branch: "Information Technology", semester: 1 }));
        const itSem2 = cseSem2Data.map(sub => ({ ...sub, branch: "Information Technology", semester: 2 }));
        const itSem3 = cseSem3Data.map(sub => ({ ...sub, branch: "Information Technology", semester: 3 }));
        const itSem4 = cseSem4Data.map(sub => ({ ...sub, branch: "Information Technology", semester: 4 }));
        const itSem5 = cseSem5Data.map(sub => ({ ...sub, branch: "Information Technology", semester: 5 }));
        const itSem7 = cseSem7Data.map(sub => ({ ...sub, branch: "Information Technology", semester: 7 }));

        console.log("🔤 Sorting all subjects alphabetically...");

        // Sort Manual Data
        sortSubjectsByName(cseSem1Data); sortSubjectsByName(eceSem1Data); sortSubjectsByName(meSem1Data);
        sortSubjectsByName(cseSem2Data); sortSubjectsByName(eceSem2Data); sortSubjectsByName(meSem2Data);
        sortSubjectsByName(cseSem3Data); sortSubjectsByName(eceSem3Data);
        sortSubjectsByName(cseSem4Data); sortSubjectsByName(eceSem4Data);
        sortSubjectsByName(cseSem5Data); sortSubjectsByName(eceSem5Data);
        sortSubjectsByName(cseSem6Data); sortSubjectsByName(eceSem6Data); sortSubjectsByName(itSem6Data);
        sortSubjectsByName(cseSem7Data); sortSubjectsByName(eceSem7Data);

        // Sort Generated Data
        sortSubjectsByName(itSem1);
        sortSubjectsByName(itSem2);
        sortSubjectsByName(itSem3);
        sortSubjectsByName(itSem4);
        sortSubjectsByName(itSem5);
        sortSubjectsByName(itSem7);

        console.log("🚀 Inserting Data into Database...");

        const allSubjects = [
            ...cseSem1Data, ...eceSem1Data, ...meSem1Data,
            ...cseSem2Data, ...eceSem2Data, ...meSem2Data,
            ...cseSem3Data, ...eceSem3Data,
            ...cseSem4Data, ...eceSem4Data,
            ...cseSem5Data, ...eceSem5Data,
            ...cseSem6Data, ...itSem6Data, ...eceSem6Data, 
            ...cseSem7Data, ...eceSem7Data,
            // Generated IT Subjects
            ...itSem1, ...itSem2, ...itSem3, ...itSem4, ...itSem5, ...itSem7
        ];

        await Subject.insertMany(allSubjects);

        console.log("🎉 Database seeded successfully!");
        mongoose.connection.close();
    } catch (error) {
        console.error("❌ Seeding Error:", error);
        mongoose.connection.close();
    }
}

seed();