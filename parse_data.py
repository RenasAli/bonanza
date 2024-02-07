import csv
import json
import xml.etree.ElementTree as ET
import yaml


with open('data.csv', 'r') as csv_file:
    csv_reader = csv.DictReader(csv_file)
    csv_data = list(csv_reader)


xml_tree = ET.parse('data.xml')
xml_root = xml_tree.getroot()
xml_data = [{"name": person.find('name').text, "age": int(person.find('age').text), "country": person.find('country').text}
            for person in xml_root.findall('person')]


with open('data.json', 'r') as json_file:
    json_data = json.load(json_file)


with open('data.yaml', 'r') as yaml_file:
    yaml_data = yaml.safe_load(yaml_file)


print("CSV Data:", csv_data)
print("XML Data:", xml_data)
print("JSON Data:", json_data)
print("YAML Data:", yaml_data)
