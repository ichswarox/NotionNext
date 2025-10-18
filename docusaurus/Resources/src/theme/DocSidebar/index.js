import React, { useEffect } from 'react';
import DocSidebar from '@theme-original/DocSidebar';
import { useLocation } from '@docusaurus/router';

export default function DocSidebarWrapper(props) {
  const location = useLocation();

  useEffect(() => {
    const sidebar = document.querySelector('.theme-doc-sidebar-menu');
    if (!sidebar) {
      return;
    }

    // On new page navigation, reset all categories to be visible
    const allCategories = sidebar.querySelectorAll('.theme-doc-sidebar-item-category-level-1');
    allCategories.forEach(category => {
      category.style.display = 'block';
    });

    const activeLink = sidebar.querySelector('.menu__link--active');
    if (!activeLink) {
      // If no active link, show all categories
      allCategories.forEach(category => {
        category.style.display = 'block';
      });
      return;
    }

    // Find the parent category of the active link
    let parentCategory = activeLink.closest('.menu__list-item');
    while (parentCategory && !parentCategory.classList.contains('theme-doc-sidebar-item-category-level-1')) {
      parentCategory = parentCategory.parentElement.closest('.menu__list-item');
    }

    if (parentCategory) {
      // Hide all other top-level categories
      allCategories.forEach(category => {
        if (category !== parentCategory) {
          category.style.display = 'none';
        }
      });
    }
  }, [location.pathname]);

  return (
    <>
      <DocSidebar {...props} />
    </>
  );
}
