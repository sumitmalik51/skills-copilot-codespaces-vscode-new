function skillsMember() {
    var skill = document.getElementById("skill");
    var skill = skill.value;
    var skill = skill.toLowerCase();
    var skill = skill.replace(/\s+/g, '');
    var skill = skill.replace(/,/g, '');
    var skill = skill.replace(/&/g, '');
    var skill = skill.replace(/-/g, '');
    var skill = skill.replace(/\./g, '');
    var skill = skill.replace(/;/g, '');
    var skill = skill.replace(/:/g, '');
    var skill = skill.replace(/!/g, '');
    var skill = skill.replace(/\?/g, '');
    var skill = skill.replace(/'/g, '');
    var skill = skill.replace(/"/g, '');
    var skill = skill.replace(/\(/g, '');
    var skill = skill.replace(/\)/g, '');
    var skill = skill.replace(/\[/g, '');
    var skill = skill.replace(/\]/g, '');
    var skill = skill.replace(/</g, '');
    var skill = skill.replace(/>/g, '');
    var skill = skill.replace(/\//g, '');
    var skill = skill.replace(/\\/g, '');
    var skill = skill.replace(/\|/g, '');
    var skill = skill.replace(/@/g, '');
    var skill = skill.replace(/#/g, '');
    var skill = skill.replace(/\$/g, '');
    var skill = skill.replace(/%/g, '');
    var skill = skill.replace(/\^/g, '');
    var skill = skill.replace(/=/g, '');
    var skill = skill.replace(/\+/g, '');
    var skill = skill.replace(/_/g, '');
    var skill = skill.replace(/`/g, '');
    var skill = skill.replace(/~/g, '');
    var skill = skill.replace(/–/g, '');
    var skill = skill.replace(/‘/g, '');
    var skill = skill.replace(/’/g, '');
    var skill = skill.replace(/“/g, '');
    var skill = skill.replace(/”/g, '');
    var skill = skill.replace(/•/g, '');
    var skill = skill.replace(/…/g, '');
    var skill = skill.replace(/&hellip;/g, '');
    var skill = skill.replace(/&amp;/g, '');
    var skill = skill.replace(/&gt;/g, '');
    var skill = skill.replace(/&lt;/g, '');
}