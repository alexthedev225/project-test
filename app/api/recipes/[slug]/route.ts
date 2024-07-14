// app/api/recipes/[id]/route.js

export async function GET(
    request: Request,
    { params }: { params: { slug: string } }
  ) {
    const { slug } = params;
    console.log("Received ID:", slug); // Log pour vérifier l'ID reçu
  
    // Données factices
    const fakeData = [
      {
        id: '1',
        title: 'Recette 1',
        excerpt: 'Un aperçu de la recette 1',
        category: 'Dessert',
        content: 'Voici le contenu de la recette 1',
        diet: 'Végétarien',
        calories: 250,
        imagePath: '/path/to/image1.jpg',
        ingredients: JSON.stringify(['Ingrédient 1', 'Ingrédient 2']),
        instructions: JSON.stringify(['Étape 1', 'Étape 2']),
      },
      {
        id: '2',
        title: 'Recette 2',
        excerpt: 'Un aperçu de la recette 2',
        category: 'Entrée',
        content: 'Voici le contenu de la recette 2',
        diet: 'Végétalien',
        calories: 150,
        imagePath: '/path/to/image2.jpg',
        ingredients: JSON.stringify(['Ingrédient A', 'Ingrédient B']),
        instructions: JSON.stringify(['Étape A', 'Étape B']),
      },
      {
        id: '3',
        title: 'Recette 3',
        excerpt: 'Un aperçu de la recette 3',
        category: 'Plat principal',
        content: 'Voici le contenu de la recette 3',
        diet: 'Sans gluten',
        calories: 350,
        imagePath: '/path/to/image3.jpg',
        ingredients: JSON.stringify(['Ingrédient X', 'Ingrédient Y']),
        instructions: JSON.stringify(['Étape X', 'Étape Y']),
      },
    ];
  
    const recipe = fakeData.find((item) => item.id === slug);
  
    if (!recipe) {
      return new Response(JSON.stringify({ status: 'fail', message: 'Recette non trouvée' }), { status: 404 });
    }
  
    return new Response(JSON.stringify(recipe), { status: 200 });
  }
  