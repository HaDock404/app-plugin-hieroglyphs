import os
import re

components_dir = os.path.dirname(os.path.abspath(__file__))


def transform_component(text):
    text = re.sub(r'\.js$', '', text)
    words = re.split(r'-', text)
    camel_case = ''.join(word.capitalize() for word in words)
    return camel_case


def index_export():
    backslash = ''
    backslash = '\n'

    files = []
    for file in os.listdir(components_dir):
        if file.endswith('.js') and file != 'index.js':
            files.append(file)

    imports = []
    for components in files:
        imports.append(
            f"import {transform_component(components)} "
            f"from './{components}';\n"
        )

    exports = ",\n    ".join(
        [transform_component(components) for components in files]
    )
    content = (
        f"{''.join(imports)}{backslash}{backslash}"
        f"export {{{backslash}"
        f"    {exports}{backslash}"
        f"}};{backslash}"
    )

    index_file_path = os.path.join(components_dir, 'index.js')

    with open(index_file_path, 'w', encoding='utf-8') as index_file:
        index_file.write(content.strip())

    print(f"`index.js` généré avec succès dans {components_dir}")


if __name__ == "__main__":
    index_export()
