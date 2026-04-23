// ==========================================
// 1. VARIABLES DEL PERSONAJE
// ==========================================
const name = "Zara Darkbane";
const characterClass = "Hechicera";
let level = 7;
let health = 80;
let mana = 120;
let attack = 45;
let defense = 30;

// Constantes adicionales para probar las funciones sin usar "números mágicos"
const enemyDefense = 25;
const spellCost = 30;
const isStunned = false;

// ==========================================
// 2. FUNCIONES
// ==========================================

// Función declarada: calculateDamage
function calculateDamage(attack, defense) {
  const damage = attack - defense;
  return damage < 0 ? 0 : damage;
}

// Arrow function: isAlive
const isAlive = (health) => {
  return health > 0;
};

// Arrow function: canCastSpell
const canCastSpell = (currentMana, spellCost, isStunned) => {
  return currentMana >= spellCost && !isStunned;
};

// Función declarada: getPresentation
function getPresentation(name, characterClass, level) {
  return `${name} — ${characterClass} (Nivel ${level})`;
}

// ==========================================
// 3. RESULTADOS (Consola)
// ==========================================
console.log(getPresentation(name, characterClass, level));
console.log("Daño al enemigo:", calculateDamage(attack, enemyDefense));
console.log("¿El personaje sigue vivo?:", isAlive(health));
console.log("¿Puede lanzar el hechizo?:", canCastSpell(mana, spellCost, isStunned));