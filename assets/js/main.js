$(document).ready(function () {
    // Funcionalidade de pesquisa
    $('#searchInput').on('input', function () {
        const searchTerm = $(this).val().toLowerCase();
        filterTools(searchTerm);
    });

    function filterTools(searchTerm) {
        let hasResults = false;

        $('.cartao-categoria').each(function () {
            const $category = $(this);
            let categoryHasResults = false;

            $category.find('.link-ferramenta').each(function () {
                const $tool = $(this);
                const toolName = $tool.find('.nome-ferramenta').text().toLowerCase();
                const toolDescription = $tool.find('.descricao-ferramenta').text().toLowerCase();
                const toolUrl = $tool.find('.url-ferramenta').text().toLowerCase();

                if (toolName.includes(searchTerm) ||
                    toolDescription.includes(searchTerm) ||
                    toolUrl.includes(searchTerm)) {
                    $tool.show();
                    categoryHasResults = true;
                    hasResults = true;
                } else {
                    $tool.hide();
                }
            });

            if (categoryHasResults || searchTerm === '') {
                $category.show();
            } else {
                $category.hide();
            }
        });


        // Mostrar/ocultar mensagem de ausência de resultados
        if (hasResults || searchTerm === '') {
            $('#noResults').addClass('d-none');
            $('#toolsContainer').removeClass('d-none');
        } else {
            $('#noResults').removeClass('d-none');
            $('#toolsContainer').addClass('d-none');
        }
    }
});