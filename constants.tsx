
export const CLINIC_NAME = "Clínica Dental Premium";

export const TREATMENTS = [
  {
    category: "Consultas y Diagnóstico",
    treatments: [
      {
        id: "consulta-general",
        name: "Consulta Odontológica",
        description: "Evaluación integral de tu salud bucal realizada por un especialista, donde resolvemos tus dudas y definimos el mejor plan de tratamiento para ti.",
        price: 30,
        currency: "PEN",
        keywords: ["consulta dental", "evaluación", "diagnóstico"],
        useCases: ["Dolor dental", "Chequeo general", "Primera visita"],
        benefits: ["Diagnóstico claro", "Orientación profesional", "Plan personalizado"],
        clinicalFlags: ["preventivo"]
      },
      {
        id: "radiografia-panoramica",
        name: "Radiografía Panorámica",
        description: "Estudio radiográfico completo que permite evaluar dientes, huesos y estructuras maxilares para un diagnóstico preciso.",
        price: 90,
        currency: "PEN",
        keywords: ["radiografía", "diagnóstico", "panorámica"],
        useCases: ["Evaluación general", "Ortodoncia", "Cirugía"],
        benefits: ["Diagnóstico preciso", "Planificación segura"],
        clinicalFlags: ["preventivo"]
      }
    ]
  },
  {
    category: "Prevención",
    treatments: [
      {
        id: "destartraje",
        name: "Destartraje",
        description: "Limpieza dental profunda que elimina sarro y placa bacteriana para mantener encías sanas y prevenir enfermedades.",
        price: 100,
        currency: "PEN",
        keywords: ["limpieza dental", "sarro", "prevención"],
        useCases: ["Sangrado de encías", "Mantenimiento dental"],
        benefits: ["Encías sanas", "Prevención de periodontitis"],
        clinicalFlags: ["preventivo"]
      },
      {
        id: "profilaxis",
        name: "Profilaxis Dental",
        description: "Limpieza preventiva que mantiene tus dientes limpios, brillantes y protegidos contra caries.",
        price: 100,
        currency: "PEN",
        keywords: ["profilaxis", "limpieza", "prevención"],
        useCases: ["Mantenimiento", "Control periódico"],
        benefits: ["Sonrisa saludable", "Prevención de caries"],
        clinicalFlags: ["preventivo"]
      }
    ]
  },
  {
    category: "Odontopediatría",
    treatments: [
      {
        id: "profilaxis-ninos",
        name: "Profilaxis Infantil",
        description: "Limpieza dental suave y adaptada para niños, fomentando hábitos saludables desde temprana edad.",
        price: 70,
        currency: "PEN",
        keywords: ["niños", "limpieza infantil"],
        useCases: ["Prevención", "Primera visita"],
        benefits: ["Prevención temprana", "Experiencia positiva"],
        clinicalFlags: ["infantil", "preventivo"]
      },
      {
        id: "pulpotomia",
        name: "Pulpotomía + Reconstrucción",
        description: "Tratamiento infantil que elimina la infección del diente temporal y lo reconstruye para conservarlo funcional.",
        price: 300,
        currency: "PEN",
        keywords: ["pulpotomía", "niños", "dolor"],
        useCases: ["Dolor dental infantil", "Caries profunda"],
        benefits: ["Alivio del dolor", "Conservación del diente"],
        clinicalFlags: ["infantil", "urgente"]
      }
    ]
  },
  {
    category: "Endodoncia",
    treatments: [
      {
        id: "endodoncia-unirradicular",
        name: "Endodoncia Unirradicular",
        description: "Tratamiento de conducto para dientes con una raíz, eliminando el dolor y preservando el diente natural.",
        price: 300,
        currency: "PEN",
        keywords: ["endodoncia", "dolor", "conducto"],
        useCases: ["Dolor intenso", "Infección"],
        benefits: ["Elimina dolor", "Evita extracción"],
        clinicalFlags: ["urgente"]
      },
      {
        id: "endodoncia-multirradicular",
        name: "Endodoncia Multirradicular",
        description: "Tratamiento especializado para dientes con múltiples raíces, realizado con precisión clínica.",
        price: 500,
        currency: "PEN",
        keywords: ["endodoncia avanzada", "dolor severo"],
        useCases: ["Infección avanzada"],
        benefits: ["Preserva el diente", "Alivio inmediato"],
        clinicalFlags: ["urgente"]
      }
    ]
  },
  {
    category: "Cirugía Oral",
    treatments: [
      {
        id: "exodoncia-simple",
        name: "Exodoncia Simple",
        description: "Extracción dental segura y controlada para aliviar dolor o eliminar dientes en mal estado.",
        price: 60,
        currency: "PEN",
        keywords: ["extracción", "dolor dental"],
        useCases: ["Diente dañado", "Infección"],
        benefits: ["Alivio inmediato", "Procedimiento seguro"],
        clinicalFlags: ["urgente"]
      },
      {
        id: "cirugia-muela-juicio",
        name: "Cirugía de Molar de Juicio",
        description: "Procedimiento quirúrgico para retirar muelas del juicio con técnicas seguras y control del dolor.",
        price: 250,
        currency: "PEN",
        keywords: ["muelas del juicio", "cirugía oral"],
        useCases: ["Dolor", "Inflamación"],
        benefits: ["Previene complicaciones", "Recuperación controlada"],
        clinicalFlags: ["urgente"]
      }
    ]
  },
  {
    category: "Estética Dental",
    treatments: [
      {
        id: "carillas-resina",
        name: "Carillas de Resina",
        description: "Mejoramos forma y color de tus dientes con carillas estéticas de resina, logrando una sonrisa armónica.",
        price: 400,
        currency: "PEN",
        keywords: ["carillas", "estética"],
        useCases: ["Mejorar sonrisa", "Dientes manchados"],
        benefits: ["Resultados inmediatos", "Diseño personalizado"],
        clinicalFlags: ["estético"]
      },
      {
        id: "blanqueamiento-consultorio",
        name: "Blanqueamiento en Consultorio",
        description: "Tratamiento profesional que aclara el tono de tus dientes de forma segura y efectiva.",
        price: 500,
        currency: "PEN",
        keywords: ["blanqueamiento", "sonrisa blanca"],
        useCases: ["Dientes oscuros", "Estética"],
        benefits: ["Sonrisa luminosa", "Procedimiento seguro"],
        clinicalFlags: ["estético"]
      }
    ]
  },
  {
    category: "Rehabilitación Oral",
    treatments: [
      {
        id: "implante-dental",
        name: "Implante Dental",
        description: "Reemplazo definitivo de dientes perdidos mediante implantes de alta calidad que devuelven función y estética.",
        price: 1200,
        currency: "PEN",
        keywords: ["implantes", "rehabilitación"],
        useCases: ["Pérdida dental"],
        benefits: ["Solución fija", "Alta durabilidad"],
        clinicalFlags: ["rehabilitador", "estético"]
      },
      {
        id: "corona-zirconio",
        name: "Corona de Zirconio",
        description: "Restauración estética y resistente que protege y devuelve la forma natural del diente.",
        price: 900,
        currency: "PEN",
        keywords: ["corona", "zirconio"],
        useCases: ["Diente debilitado"],
        benefits: ["Alta estética", "Larga duración"],
        clinicalFlags: ["rehabilitador", "estético"]
      }
    ]
  }
];

export const TREATMENTS_TEXT = TREATMENTS
  .map(category =>
    `${category.category}\n` +
    category.treatments
      .map(
        t =>
          `- ${t.name}: S/. ${t.price} (${t.description})`
      )
      .join('\n')
  )
  .join('\n\n');



export const SYSTEM_PROMPT = `
Eres "Luna", la Asistente Virtual oficial de ${CLINIC_NAME}, una clínica dental premium.
Tu rol es orientar, tranquilizar y guiar a los pacientes con información clara y humana,
sin reemplazar nunca la evaluación de un odontólogo.

Hablas siempre en español, con un tono cálido, profesional y empático.
Eres cercana, clara y transmites confianza.

────────────────────────────
PRINCIPIOS FUNDAMENTALES
────────────────────────────

1. Empatía primero:
Si el paciente menciona dolor, miedo, inflamación o urgencia, responde con calma:
- "Lamento que estés pasando por eso, vamos a ayudarte 🦷"
- "Entiendo tu preocupación, estamos aquí para apoyarte ✨"

2. Regla absoluta: NO diagnosticar
Nunca digas qué tiene el paciente.
Usa siempre:
"Para darte un diagnóstico preciso, es necesaria una evaluación clínica."

3. Triage clínico:
- URGENTE → prioriza contacto humano y pide teléfono.
- ESTÉTICO / PREVENTIVO → informa, explica y ofrece evaluación.

4. Estilo:
Respuestas claras, humanas y breves.
Usa emojis con moderación (🦷 ✨ 📅).

────────────────────────────
BASE DE CONOCIMIENTOS – TRATAMIENTOS Y PRECIOS
────────────────────────────

${TREATMENTS_TEXT}

Notas importantes:
- Los precios son referenciales.
- El monto final se confirma luego de la evaluación clínica.

────────────────────────────
FLUJO DE CAPTACIÓN (OBLIGATORIO)
────────────────────────────

Antes de cerrar la conversación, intenta obtener:
- Nombre del paciente
- Motivo de consulta
- Teléfono de contacto

Ejemplo:
"Para ayudarte mejor, ¿me indicas tu nombre y un número de contacto? 📞"

────────────────────────────
HORARIO Y PROMOCIONES
────────────────────────────

Horario:
Lunes a Sábado
9:00 a.m. – 1:00 p.m. y 3:00 p.m. – 8:30 p.m.

Promoción vigente:
15% de descuento en Blanqueamiento Dental si vienen 2 personas.

────────────────────────────
MANEJO DE INCERTIDUMBRE
────────────────────────────

Si no tienes el dato exacto:
"Es una excelente pregunta. ¿Deseas que un especialista te contacte para orientarte mejor?"

────────────────────────────
OBJETIVO FINAL
────────────────────────────

Generar confianza, resolver dudas reales y facilitar que el paciente
agende una evaluación en la clínica.
`;












