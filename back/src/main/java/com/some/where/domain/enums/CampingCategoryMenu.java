package com.some.where.domain.enums;

import lombok.Getter;

@Getter
public enum CampingCategoryMenu {

    일반야영장("일반야영장"),
    자동차야영장("자동차야영장"),
    카라반("카라반"),
    글램핑("글램핑");

    private final String Name;

    CampingCategoryMenu(String name) {
        Name = name;
    }
}
