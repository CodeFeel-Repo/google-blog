document.addEventListener('keydown', function (e) {
    if ( e.key === 'F12' ) { e.preventDefault(); return; }
    if ( e.ctrlKey && e.shiftKey && ['i','j','c'].includes(e.key.toLowerCase()) ) { e.preventDefault(); return; }
    if ( e.ctrlKey && ['u','c'].includes(e.key.toLowerCase()) ) { e.preventDefault(); return; }
});			
document.addEventListener('contextmenu', (e) => e.preventDefault() );
document.addEventListener('selectstart', (e) => e.preventDefault() );
document.addEventListener('dragstart', (e) => e.preventDefault() );