// SkillFilter.js
import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const SkillFilter = ({ skills, selectedSkills, onSkillToggle, onResetFilters }) => {
  const { t } = useTranslation();

  return (
    <div className="skill-filter mb-4">
      <h5 className="text-white mb-3">{t('filter_by_skills')}</h5>
      <ButtonGroup className="flex-wrap">
        {skills.map((skill) => (
          <Button
            key={skill}
            variant={selectedSkills.includes(skill) ? "primary" : "outline-primary"}
            onClick={() => onSkillToggle(skill)}
            className="m-1"
          >
            {skill}
          </Button>
        ))}
      </ButtonGroup>
      {selectedSkills.length > 0 && (
        <Button 
          variant="secondary" 
          onClick={onResetFilters} 
          className="ms-2"
        >
          {t('reset_filters')}
        </Button>
      )}
    </div>
  );
};

export default SkillFilter;