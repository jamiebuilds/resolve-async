// @flow
const promisify = require('typeable-promisify');
const resolve = require('resolve');

/*::
export type ResolveOptions = {
  basedir?: string,
  package?: Object,
  extensions?: Array<string>,
  readFile?: Function,
  isFile?: Function,
  packageFilter?: Function,
  pathFilter?: Function,
  paths?: Array<string>,
  moduleDirectory?: string | Array<string>,
};
*/

function resolveAsync(
  fileName /*: string */,
  opts /*:? ResolveOptions */
) /*: Promise<string> */ {
  return promisify(cb => resolve(fileName, opts, cb));
}

module.exports = resolveAsync;
