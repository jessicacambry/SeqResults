BioProjects.ReadGroup = DS.Model.extend({
  run: DS.belongsTo('run', { async: true }),

  library: DS.attr('string'),
  barcode: DS.attr('string'),
  sample: DS.attr('string'),
  library_date: DS.attr('date'),
  library_prep_method: DS.attr('string'),
  input_ng: DS.attr('number'),
  shearing_method: DS.attr('string'),
  avg_insert_size: DS.attr('number'),
  max_insert_size: DS.attr('number'),
  min_insert_size: DS.attr('number'),
  notes: DS.attr('string'),
  pcr_cycles: DS.attr('number'),
  pcr_annealing_sec: DS.attr('number'),
  pcr_annealing_deg: DS.attr('number'),
  pcr_extension_sec: DS.attr('number'),
  pcr_extension_deg: DS.attr('number'),
  start_library_nm: DS.attr('number'),
  final_library_pm: DS.attr('number'),
  naoh_stock_date: DS.attr('date'),
  contact_email: DS.attr('string'),
  pcr_yield_ng: DS.attr('number'),
  pcr_conc_nm: DS.attr('number'),
  pcr_volume_ul: DS.attr('number'),
  notebook_location: DS.attr('string'),
  pre_denaturation_buffer: DS.attr('string'),

  association_meta_data: DS.attr()
});