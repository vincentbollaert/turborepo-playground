module.exports = {
  source: ['package.json', 'packages/**/package.json', 'apps/**/package.json'],
  versionGroups: [
    {
      label: 'use workspace protocol for local packages',
      dependencies: ['$LOCAL'],
      dependencyTypes: ['!local'],
      pinVersion: '*',
    },
    {
      label: 'Enforce same version for all other packages',
      packages: ['**'],
      dependencies: ['**'],
      dependencyTypes: ['dependencies', 'devDependencies', 'peerDependencies'],
      pinVersion: '2.2.2',
    },
  ],
}
