import moduleAlias from 'module-alias';

export function loadAliases(aliases: { [index: string]: string }) {
  moduleAlias.addAliases(aliases);
}
