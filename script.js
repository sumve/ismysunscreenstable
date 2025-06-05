function checkPhotostability() {
  const input = document.getElementById("ingredients").value.toLowerCase();

  const avobenzone = [
    "avobenzone",
    "butyl methoxydibenzoylmethane",
    "bmbm",
    "parsol1789",
    "eusolex 9020",
  ];
  const octocrylene = [
    "octocrylene",
    "2-ethylhexyl 2-cyano-3, 3-diphenylacrylate",
  ];
  const octinoxate = [
    "octinoxate",
    "ethylhexyl methoxycinnamate",
    "omc",
    "ehmc",
    "parsol mcx",
  ];
  const zinc = ["zinc oxide"];
  const titanium = ["titanium dioxide"];
  const modernFilters = [
    "diethylamino hydroxybenzoyl hexyl benzoate", //Uvinul A Plus
    "ethylhexyl triazone", //Uvinul T 150
    "bis-ethylhexyloxyphenol methoxyphenyl triazine", //Tinosorb S
  ];

  function contains(list) {
    return list.some((name) => input.includes(name));
  }

  const hasAvobenzone = contains(avobenzone);
  const hasOctocrylene = contains(octocrylene);
  const hasOctinoxate = contains(octinoxate);
  const hasZinc = contains(zinc);
  const hasTitanium = contains(titanium);
  const hasModern = contains(modernFilters);

  let result = "Not enough information.";

  if (hasAvobenzone && hasOctinoxate && hasOctocrylene) {
    result = "❌ Not Recommended - Avobenzone + Octionoxate + Octocrylene is unstable.";
  } else if (hasAvobenzone && hasOctinoxate) {
    result = "❌ Not Recommended - Avobenzone + Octinoxate is unstable.";
  } else if (hasAvobenzone && hasOctocrylene) {
    result = "✅ Recommended - Avobenzone is stabilized by Octocrylene.";
  } else if (hasOctinoxate && !hasAvobenzone) {
    result = "✅Recommended - Octinoxate alone is stable.";
  } else if (hasAvobenzone && hasOctinoxate && (hasZinc || hasTitanium)) {
    result =
      "Conditionally OK - Has unstable combo, but Zinc/Titanium might help.";
  } else if (hasModern || hasZinc || hasTitanium) {
    result = "✅ Recommended - Contains photostable filters.";
  }

  document.getElementById("result").textContent = result;
}
