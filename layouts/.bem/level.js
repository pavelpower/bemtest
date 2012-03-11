exports.getTechs = function() {
    var techs;
    techs = techs || this.__base();
    techs['js'] = 'bem/lib/techs/js.js';
    techs['decl.js'] = 'bem/lib/techs/decl.js';
    techs['deps.js'] = 'bem/lib/techs/deps.js';
    techs['bemdecl.js'] = 'bem/lib/techs/bemdecl.js';
    return techs;
};