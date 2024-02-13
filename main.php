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
    // XML is valid according to the XSD schema
    // Process the data or save it to a database
    echo "XML data is valid!";
} else {
    // XML is not valid
    echo "XML data is not valid!";
}
?>