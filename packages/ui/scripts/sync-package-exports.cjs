const fs = require('fs')
const path = require('path')

const createExportConfig = ({ componentDirName, componentName }) => ({
  types: `./dist/${componentDirName}/${componentName}.d.ts`,
  import: `./dist/${componentDirName}/${componentName}.mjs`,
  require: `./dist/${componentDirName}/${componentName}.js`,
})

const extractComponentName = indexContent => {
  const exportMatch = indexContent.match(/export\s*{\s*(\w+)\s*}/)
  if (!exportMatch) {
    throw new Error('Could not find export statement in expected format: export { ComponentName }')
  }
  return exportMatch[1]
}

const generatePackageExports = () => {
  const srcDir = path.join(__dirname, '..', 'src')
  const packageExports = {}
  const entries = fs.readdirSync(srcDir, { withFileTypes: true })

  console.log('\nProcessing component directories...')

  for (const entry of entries) {
    if (!entry.isDirectory()) continue

    const dirName = entry.name
    const dirPath = path.join(srcDir, dirName)
    const indexFilePath = path.join(dirPath, 'index.ts')

    console.log(`\nChecking directory: ${dirName}`)

    try {
      if (!fs.existsSync(indexFilePath)) {
        console.warn(`⚠️  Skipping ${dirName}: No index.ts file found`)
        continue
      }

      const indexContent = fs.readFileSync(indexFilePath, 'utf8')
      const componentName = extractComponentName(indexContent)

      // Add to exports
      packageExports[`./${dirName}`] = createExportConfig({ componentDirName: dirName, componentName })
      console.log(`✓ Successfully processed ${componentName}`)

      if (componentName.toLowerCase() !== dirName.toLowerCase()) {
        console.warn(`⚠️  Note: Component name "${componentName}" differs from directory name "${dirName}"`)
      }
    } catch (error) {
      console.error(`❌ Error processing ${dirName}:`, error.message)
    }
  }

  return packageExports
}

try {
  // try updating package.json contents
  const packageJsonPath = path.join(__dirname, '..', 'package.json')
  const packageJsonContent = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'))

  packageJsonContent.exports = generatePackageExports()

  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJsonContent, null, 2) + '\n', 'utf8')

  console.log('\n✨ Successfully updated UI package.json exports')
  console.log(
    'Exported components:',
    Object.keys(packageJsonContent.exports).filter(key => key !== './styles.css'),
  )
} catch (error) {
  console.error('\n❌ Failed to update exports:', error.message)
  process.exit(1)
}
