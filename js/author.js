/**
 * XSSLab - Ultimate XSS Payload Arsenal
 * Author: Amit Verma darkie
 * GitHub: https://github.com/darkie404/XSSLab
 * Website: https://xsslab.darkie.site
 * Telegram: https://darkie4.t.me/
 *
 * Built with ❤️ for the security research community
 * Licensed under MIT License
 */

(function() {
    'use strict';

    const styles = {
        title: 'color: #00ff41; font-size: 24px; font-weight: bold; text-shadow: 0 0 10px rgba(0,255,65,0.5);',
        author: 'color: #fff; font-size: 16px; font-weight: bold;',
        info: 'color: #ccc; font-size: 14px;',
        warning: 'color: #ffa500; font-size: 12px; font-weight: bold;',
        link: 'color: #00d4aa; font-size: 12px;'
    };

    const asciiArt = `
    ██╗  ██╗███████╗███████╗███╗   ██╗ ██████╗ ██╗    ██╗
    ╚██╗██╔╝██╔════╝██╔════╝████╗  ██║██╔═══██╗██║    ██║
     ╚███╔╝ ███████╗███████╗██╔██╗ ██║██║   ██║██║ █╗ ██║
     ██╔██╗ ╚════██║╚════██║██║╚██╗██║██║   ██║██║███╗██║
    ██╔╝ ██╗███████║███████║██║ ╚████║╚██████╔╝╚███╔███╔╝
    ╚═╝  ╚═╝╚══════╝╚══════╝╚═╝  ╚═══╝ ╚═════╝  ╚══╝╚══╝
    `;

    console.log(`%c${asciiArt}`, styles.title);
    console.log('%c🥷 XSSLab - Ultimate XSS Payload Arsenal', styles.title);
    console.log('%c════════════════════════════════════════', 'color: #00ff41;');
    console.log('%c👨‍💻 Author: Amit Verma darkie', styles.author);
    console.log('%c🔗 GitHub: https://github.com/darkie404', styles.link);
    console.log('%c💼 Telegram: https://darkie4.t.me/', styles.link);
    console.log('%c🌐 Website: https://xsslab.darkie.site', styles.link);
    console.log('%c════════════════════════════════════════', 'color: #00ff41;');
    console.log('%c📝 For educational and authorized testing only', styles.warning);
    console.log('%c🛡️ Use responsibly and ethically', styles.warning);
    console.log('%c════════════════════════════════════════', 'color: #00ff41;');
    console.log('%c💡 Found a bug? Contribute: https://github.com/darkie404/XSSLab', styles.info);
    console.log('%c⭐ Like this project? Give it a star!', styles.info);

    // Easter egg for curious developers
    window.author = {
        name: 'Amit Verma',
        username: 'darkie404',
        github: 'https://github.com/darkie404',
        telegram: 'https://darkie4.t.me/',
        project: 'XSSLab',
        website: 'https://xsslab.darkie.site',
        message: 'Thanks for checking out the console! 🥷',
        hire: function() {
            console.log('%c💼  Let\'s connect on Telegram!', 'color: #00d4aa; font-size: 14px; font-weight: bold;');
            window.open('https://darkie4.t.me/', '_blank');
        }
    };

    // Add to global scope for easy access
    window.XSSLab = {
        author: window.author,
        version: '1.0.0',
        repository: 'https://github.com/darkie404/XSSLab',
        contribute: 'https://github.com/darkie404/XSSLab/blob/main/CONTRIBUTING.md'
    };

})();