<template>
    <div class="recipe-card">
        <div class="recipe-card-image-wrapper">
            <img :src="OmeletteImage" alt="image of omelette">
        </div>
        <div class="recipe-content">
            <h3 class="recipe-title">Simple Omelette Recipe</h3>
            <p class="recipe-description">An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>
            <div class="recipe-preparation-time recipe-section">
                <h4 class="recipe-preparation-time-title">
                    Preparation time
                </h4>
                <ul class="recipe-preparation-time-list-details">
                    <li class="list-item">
                        <span class="label-list-item">Total:</span>
                        <span class="list-item-content">Approximately 10 minutes</span>
                    </li>
                    <li class="list-item">
                        <span class="label-list-item">Preparation:</span>
                        <span class="list-item-content">5 minutes</span>
                    </li>
                    <li class="list-item">
                        <span class="label-list-item">Cooking:</span>
                        <span class="list-item-content">5 minutes</span>
                    </li>
                </ul>
            </div>
            <div class="recipe-ingredients recipe-section">
                <h4 class="recipe-ingredients-title">
                    Ingredients
                </h4>
                <ul class="recipe-ingredients-list">
                    <li class="list-item">2-3 large eggs</li>
                    <li class="list-item">Salt, to taste</li>
                    <li class="list-item">Pepper, to taste</li>
                    <li class="list-item">1 tablespoon of butter or oil</li>
                    <li class="list-item">Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
                </ul>
            </div>
            <p class="horizontal-line"></p>
            <div class="recipe-instructions recipe-section">
                <h4 class="recipe-instructions-title">
                    Instructions
                </h4>
                <ul class="recipe-instructions-list">
                    <li class="list-item">
                        <span class="label-list-item">Beat the eggs:</span>
                        <span class="list-item-content">In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.</span>
                    </li>
                    <li class="list-item">
                        <span class="label-list-item">Heat the pan:</span>
                        <span class="list-item-content">Place a non-stick frying pan over medium heat and add butter or oil.</span>
                    </li>
                    <li class="list-item">
                        <span class="label-list-item">Cook the omelette</span>
                        <span class="list-item-content">Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.</span>
                    </li>
                    <li class="list-item">
                        <span class="label-list-item">Add fillings(optional)</span>
                        <span class="list-item-content">When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.</span>
                    </li>
                    <li class="list-item">
                        <span class="label-list-item">Fold and serve</span>
                        <span class="list-item-content">As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.</span>
                    </li>
                    <li class="list-item">
                        <span class="label-list-item">Enjoy</span>
                        <span class="list-item-content">Serve hot, with additional salt and pepper if needed.</span>
                    </li>
                </ul>
            </div>
            <p class="horizontal-line"></p>
            <div class="recipe-nutrition recipe-section">
                <h4 class="recipe-nutrition-title">Nutrition</h4>
                <p class="recipe-nutrition-table-description">The table below shows nutritional values per serving without the additional fillings.</p>
                <table class="recipe-nutrition-table">
                    <tbody>
                        <tr class="table-row">
                            <td class="table-label-cell">Calories</td>
                            <td class="table-value-cell">277kcal</td>
                        </tr>
                        <tr class="table-row">
                            <td class="table-label-cell">Carbs</td>
                            <td class="table-value-cell">0g</td>
                        </tr>
                        <tr class="table-row">
                            <td class="table-label-cell">Protein</td>
                            <td class="table-value-cell">20g</td>
                        </tr>
                        <tr class="table-row">
                            <td class="table-label-cell">Fat</td>
                            <td class="table-value-cell">22g</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup>
import OmeletteImage from '/assets/images/newbieChallenges/image-omelette.jpeg'
</script>