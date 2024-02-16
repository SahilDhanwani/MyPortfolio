<?php
// Read the XML data sent from the form
$xmlData = file_get_contents('php://input');

// Load the XML data into a DOMDocument object
$doc = new DOMDocument();
$doc->loadXML($xmlData);

// Load the XSD schema
$xsd = 'data.xsd'; // Path to your XSD file
$isValid = $doc->schemaValidate($xsd);

if ($isValid) {
    echo "XML data is valid in PHP";
} else {
    echo "XML data is not valid!";
}
?>