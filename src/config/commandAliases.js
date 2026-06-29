/**
 * Command Aliases Configuration
 * Maps shortened command names to their full command names
 */

export const commandAliases = {
    'kasa': 'kasa',
'saldo': 'kasa',
'portfel': 'kasa',

'wpłać': 'wpłać',
'wypłać': 'wypłać',
'pracuj': 'pracuj',
'dzienna': 'dzienna',
'hazard': 'hazard',
'zakład': 'hazard',
'okradnij': 'okradnij',
'przestępstwo': 'przestępstwo',
'zapłać': 'zapłać',
'daj': 'zapłać',
'wyślij': 'zapłać',

'ping': 'ping',
'pomoc': 'pomoc',
'p': 'pomoc',
'info': 'pomoc',

'ban': 'ban',
'wyrzuć': 'wyrzuć',
'wycisz': 'wycisz',
'ostrzeż': 'ostrzeż',
'wyczyść': 'wyczyść',
'usuń': 'wyczyść',
'odwycisz': 'odwycisz',

'ranga': 'ranga',
'poziom': 'ranga',
'xp': 'ranga',
'ranking': 'ranking',
'topka': 'ranking',

'sklep': 'sklep',
'kup': 'kup',
'ekwipunek': 'ekwipunek',
'eq': 'ekwipunek',

'użytkownik': 'użytkownik',
'profil': 'użytkownik',
'avatar': 'avatar',

'urodziny': 'urodziny',

'moneta': 'moneta',
'kostka': 'kostka',
'walka': 'walka',

'losowanie': 'losowanie',

'bilet': 'bilet',

'weryfikacja': 'weryfikacja',

'powitanie': 'powitanie',
'pożegnanie': 'pożegnanie',
'autorola': 'autorola',

'oblicz': 'oblicz',
'pogoda': 'pogoda',
'zadania': 'zadania',
'zgłoś': 'zgłoś',

'statystyki': 'statystyki',

'role': 'role',

'dołącz': 'dołącz',

'teraz': 'teraz',
};

export const subcommandAliases = {
    'l': 'list',
    'ls': 'list',
    's': 'set',
    'i': 'info',
    'r': 'remove',
    'rm': 'remove',
    'del': 'remove',
    'n': 'next',
    'sc': 'setchannel',

    'a': 'add',
    'c': 'complete',
    'done': 'complete',
    'd': 'complete',

    'start': 'create',
    'stop': 'end',
    'roll': 'reroll',

    'add': 'add',
    'remove': 'remove',
    'list': 'list',
};

/**
 * Resolve a command alias to its full command name
 * @param {string} commandName - The command name (could be an alias)
 * @returns {string} - The full command name, or the original if not an alias
 */
export function resolveCommandAlias(commandName) {
    const normalized = commandName.toLowerCase();
    return commandAliases[normalized] || commandName;
}

/**
 * Resolve a subcommand alias to its full subcommand name
 * @param {string} subcommandName - The subcommand name (could be an alias)
 * @returns {string} - The full subcommand name, or the original if not an alias
 */
export function resolveSubcommandAlias(subcommandName) {
    const normalized = subcommandName.toLowerCase();
    return subcommandAliases[normalized] || subcommandName;
}
