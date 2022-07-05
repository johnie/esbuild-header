import { readFile } from 'fs/promises';
import pupa from 'pupa';
import { readPackage } from 'read-pkg';
import { readPackageUp } from 'read-pkg-up';

const getPackage = async (cwd) => {
  try {
    return await readPackage(cwd && { cwd });
  } catch (error) {
    const { packageJson } = await readPackageUp();
    return packageJson;
  }
};

const defaultComment = `/*!
 * {name}
 * {description}
 * @author {author.name} <{author.email}>
 * @version {version}
 * Copyright ${new Date().getFullYear()} {license} licensed.
*/
`;

const commentTemplate = (tmpl = defaultComment, data = {}) =>
  pupa(tmpl, data, { ignoreMissing: true });

const esbuildHeader = (options = {}) => ({
  name: 'header',
  setup(build) {
    const { template, cwd } = options;
    build.onLoad({ filter: /.\.(js|ts|jsx|mjs)$/ }, async (args) => {
      const source = await readFile(args.path, 'utf8');
      const pkg = await getPackage(cwd);
      const header = commentTemplate(template, pkg);

      try {
        const contents = header.concat(source);
        return {
          contents,
        };
      } catch (error) {
        return {
          errors: [error],
        };
      }
    });
  },
});

export default esbuildHeader;
