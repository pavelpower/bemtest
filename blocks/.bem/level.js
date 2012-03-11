exports.getTechs = function() {
    var techs;
    techs = techs || this.__base();
    techs['js'] = 'bem/lib/techs/js.js';
    techs['deps.js'] = 'bem/lib/techs/deps.js';
    return techs;
};
