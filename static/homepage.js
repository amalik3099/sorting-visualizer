window.onload = function () {

    function truncate(str, n) {
        return (str.length > n) ? str.substr(0, n - 1) + '&hellip;' : str;
    }

    function display_popular_mangas(mangas) {
        let content_table = '';

        for (let k = 10; k >= 8; k--) {
            //         content_table = content_table + `

            //         <li>
            //             <div class="col-md-6">
            //                 <a href="view/${k}">${mangas[`${k}`]['title']}</a>
            //             </div>
            //         </li>
            // `;
            content_table = content_table + `
            <div class="col-md-4 control">
                <div class="card h-100">
                    <a href="view/${k}">
                    <img class="card-img-top img_control"
                        src= '${mangas[`${k}`]['image']}'
                        alt="${mangas[`${k}`]['title']}: ${mangas[`${k}`]['description']}"
                    />
                    </a>
                    <div class="card-body">
                        <h4 class="card-title">
                            <a href="view/${k}">${mangas[`${k}`]['title']}</a>
                        </h4>
                        <p class="card-text">
                            ${truncate(mangas[`${k}`]['description'],190)}
                        </p>
                    </div>
                </div>
            </div>
            `;

            document.getElementById("content").innerHTML = content_table;
        }
    }

    $(document).ready(
        function () {
            display_popular_mangas(mangas);
        }
    )
}