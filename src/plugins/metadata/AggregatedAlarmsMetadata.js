import * as AggregatedAlarmsUtils from '../utils/AggregatedAlarmsUtils'

const gripColumns = {
  table_columns: [
    { name: 'overview', label: 'Overview', align: 'center' },
    {
      name: 'asn_attacker',
      required: true,
      label: 'AS Attacker',
      align: 'left',
      field: (row) => row.asn_attacker,
      format: (val) => `${val}`,
      sortable: true
    },
    {
      name: 'asn_attacker_name',
      required: true,
      label: 'AS Attacker Name',
      align: 'left',
      field: (row) => row.asn_attacker_name,
      format: (val) => `${val}`,
      sortable: false
    },
    {
      name: 'asn_attacker_af',
      required: true,
      label: 'AS Attack IP Address Family',
      align: 'left',
      field: (row) => row.asn_attacker_af,
      format: (val) => `${val}`,
      sortable: true
    },
    {
      name: 'asn_attacker_newcomer',
      required: true,
      label: 'AS Attacker Newcomer',
      align: 'left',
      field: (row) => row.asn_attacker_newcomer,
      format: (val) => `${val}`,
      sortable: true
    },
    {
      name: 'asn_attacker_trustworthy',
      required: true,
      label: 'AS Attack Trustworthy',
      align: 'left',
      field: (row) => row.asn_attacker_trustworthy,
      format: (val) => `${val}`,
      sortable: true
    },
    {
      name: 'asn_attacker_country',
      required: true,
      label: 'AS Attacker Country',
      align: 'left',
      field: (row) => row.asn_attacker_country,
      format: (val) => `${val}`,
      sortable: true
    },
    {
      name: 'asn_attacker_country_iso_code3',
      required: true,
      label: 'AS Attacker Country Code',
      align: 'left',
      field: (row) => row.asn_attacker_country_iso_code3,
      format: (val) => `${val}`,
      sortable: true
    },
    {
      name: 'asn_attacker_attacking_prefix',
      required: true,
      label: 'IP Prefix Attacked',
      align: 'left',
      field: (row) => row.asn_attacker_attacking_prefix,
      format: (val) => `${val}`,
      sortable: true
    },
    {
      name: 'asn_attacker_trustworthy_tag',
      required: true,
      label: 'AS Attack Trustworthy Tag',
      align: 'left',
      field: (row) => row.asn_attacker_trustworthy_tag,
      format: (val) => `${val}`,
      sortable: true
    },
    {
      name: 'asn_victim',
      required: true,
      label: 'AS Victim',
      align: 'left',
      field: (row) => row.asn_victim,
      format: (val) => `${val}`,
      sortable: true
    },
    {
      name: 'asn_victim_name',
      required: true,
      label: 'AS Victim Name',
      align: 'left',
      field: (row) => row.as_victim_name,
      format: (val) => `${val}`,
      sortable: false
    },
    {
      name: 'asn_victim_af',
      required: true,
      label: 'AS Attack IP Address Family',
      align: 'left',
      field: (row) => row.asn_victim_af,
      format: (val) => `${val}`,
      sortable: true
    },
    {
      name: 'asn_victim_newcomer',
      required: true,
      label: 'AS Victim Newcomer',
      align: 'left',
      field: (row) => row.asn_victim_newcomer,
      format: (val) => `${val}`,
      sortable: true
    },
    {
      name: 'asn_victim_trustworthy',
      required: true,
      label: 'AS Attack Trustworthy',
      align: 'left',
      field: (row) => row.asn_victim_trustworthy,
      format: (val) => `${val}`,
      sortable: true
    },
    {
      name: 'asn_victim_country',
      required: true,
      label: 'AS Victim Country',
      align: 'left',
      field: (row) => row.asn_victim_country,
      format: (val) => `${val}`,
      sortable: true
    },
    {
      name: 'asn_victim_country_iso_code3',
      required: true,
      label: 'AS Victim Country Code',
      align: 'left',
      field: (row) => row.asn_victim_country_iso_code3,
      format: (val) => `${val}`,
      sortable: true,
      visible: false
    },
    {
      name: 'asn_victim_trustworthy_tag',
      required: true,
      label: 'AS Victim Trustworthy Tag',
      align: 'left',
      field: (row) => row.asn_victim_trustworthy_tag,
      format: (val) => `${val}`,
      sortable: false
    }
  ],
  table_aggregated_columns: [
    {
      name: 'total_count',
      required: true,
      label: 'Nb. Alarms',
      align: 'left',
      field: (row) => row.total_count,
      format: (val) => `${val}`,
      sortable: true
    },
    {
      name: 'high_severity_count',
      required: true,
      label: 'Nb. High Severity Alarms',
      align: 'left',
      field: (row) => row.high_severity_count,
      format: (val) => `${val}`,
      sortable: true
    },
    {
      name: 'medium_severity_count',
      required: true,
      label: 'Nb. Medium Severity Alarms',
      align: 'left',
      field: (row) => row.medium_severity_count,
      format: (val) => `${val}`,
      sortable: true
    },
    {
      name: 'low_severity_count',
      required: true,
      label: 'Nb. Low Severity Alarms',
      align: 'left',
      field: (row) => row.low_severity_count,
      format: (val) => `${val}`,
      sortable: true
    },
    {
      name: 'deviation_median',
      required: true,
      label: 'Median Suspicion Level',
      align: 'left',
      field: (row) => row.deviation_median,
      format: (val) => `${val}`,
      sortable: true
    },
    {
      name: 'deviation_avg',
      required: true,
      label: 'Average Suspicion Level',
      align: 'left',
      field: (row) => row.deviation_avg,
      format: (val) => `${val}`,
      sortable: true
    },
    {
      name: 'duration_median',
      required: true,
      label: 'Median Duration (minutes)',
      align: 'left',
      field: (row) => row.duration_median,
      format: (val) => `${val}`,
      sortable: true
    },
    {
      name: 'duration_avg',
      required: true,
      label: 'Average Duration (minutes)',
      align: 'left',
      field: (row) => row.duration_avg,
      format: (val) => `${val}`,
      sortable: true
    }
  ]
}

const iodaColumns = {
  table_columns: [
    { name: 'asn_overview', label: 'AS Internet Overview', align: 'center' },
    { name: 'country_overview', label: 'Country Internet Overview', align: 'center' },
    {
      name: 'entity',
      required: true,
      label: 'AS',
      align: 'left',
      field: (row) => row.entity,
      format: (val) => `${val}`,
      sortable: true
    },
    {
      name: 'entity_name',
      required: true,
      label: 'AS Name',
      align: 'left',
      field: (row) => row.entity_name,
      format: (val) => `${val}`,
      sortable: false
    },
    {
      name: 'entity_af',
      required: true,
      label: 'AS IP Address Family',
      align: 'left',
      field: (row) => row.entity_af,
      format: (val) => `${val}`,
      sortable: true
    },
    {
      name: 'entity_country',
      required: true,
      label: 'Country',
      align: 'left',
      field: (row) => row.entity_country,
      format: (val) => `${val}`,
      sortable: true
    },
    {
      name: 'entity_country_iso_code3',
      required: true,
      label: 'Country Code',
      align: 'left',
      field: (row) => row.entity_country_iso_code3,
      format: (val) => `${val}`,
      sortable: true
    },
    {
      name: 'entity_ip_count',
      required: true,
      label: 'AS IP Count',
      align: 'left',
      field: (row) => row.entity_ip_count,
      format: (val) => `${val}`,
      sortable: true
    }
  ]
}
export const ALARMS_INFO = {
  ihr: {
    alarm_types: {
      hegemony: {
        columns: {
          hegemony_origin_asn: [],
          hegemony_origin_asn_name: [],
          hegemony_origin_asn_country: [],
          hegemony_origin_asn_country_iso_code2: [],
          hegemony_origin_asn_country_iso_code3: [],
          hegemony_origin_asn_af: [],
          hegemony_asn: [],
          hegemony_asn_name: [],
          hegemony_asn_country: [],
          hegemony_asn_country_iso_code2: [],
          hegemony_asn_country_iso_code3: [],
          hegemony_asn_af: [],
          hegemony_timebin: [],
          hegemony_count: [],
          hegemony_severity: [],
          hegemony_deviation: []
        },
        metadata: {
          title: 'AS Dependency',
          table_button_text: 'AS Dependency Alarms',
          description: 'Routing changes found in AS Dependency data (a.k.a. AS Hegemony).',
          default_key: 'origin_asn',
          group_by_key_options: { originasn: 'origin_asn', dependency: 'asn' },
          is_default_selected: true,
          table_columns: [
            { name: 'overview', label: 'Overview', align: 'center' },
            { name: 'asn_overview', label: 'Neighbor Dependency Overview', align: 'center' },
            {
              name: 'origin_asn',
              required: true,
              label: 'Origin AS',
              align: 'left',
              field: (row) => row.origin_asn,
              format: (val) => `${val}`,
              sortable: true
            },
            {
              name: 'origin_asn_name',
              required: true,
              label: 'Origin AS Name',
              align: 'left',
              field: (row) => row.origin_asn_name,
              format: (val) => `${val}`,
              sortable: false
            },
            {
              name: 'origin_asn_af',
              required: true,
              label: 'Origin AS IP Address Family',
              align: 'left',
              field: (row) => row.origin_asn_af,
              format: (val) => `${val}`,
              sortable: true
            },
            {
              name: 'origin_asn_country',
              required: true,
              label: 'Origin Country',
              align: 'left',
              field: (row) => row.origin_asn_country,
              format: (val) => `${val}`,
              sortable: true
            },
            {
              name: 'origin_asn_country_iso_code3',
              required: true,
              label: 'Origin Country Code',
              align: 'left',
              field: (row) => row.origin_asn_country_iso_code3,
              format: (val) => `${val}`,
              sortable: true
            },
            {
              name: 'asn',
              required: true,
              label: 'Anomalous Dependency',
              align: 'left',
              field: (row) => row.asn,
              format: (val) => `${val}`,
              sortable: true
            },
            {
              name: 'asn_name',
              required: true,
              label: 'Anomalous Dependency Name',
              align: 'left',
              field: (row) => row.asn_name,
              format: (val) => `${val}`,
              sortable: false
            },
            {
              name: 'asn_af',
              required: true,
              label: 'Anomalous Dependency IP Address Family',
              align: 'left',
              field: (row) => row.asn_af,
              format: (val) => `${val}`,
              sortable: true
            },
            {
              name: 'asn_country',
              required: true,
              label: 'Anomalous Dependency Country',
              align: 'left',
              field: (row) => row.asn_country,
              format: (val) => `${val}`,
              sortable: true
            },
            {
              name: 'asn_country_iso_code3',
              required: true,
              label: 'Anomalous Dependency Country Code',
              align: 'left',
              field: (row) => row.asn_country_iso_code3,
              format: (val) => `${val}`,
              sortable: true
            }
          ],
          table_aggregated_columns: [
            {
              name: 'total_count',
              required: true,
              label: 'Nb. Alarms',
              align: 'left',
              field: (row) => row.total_count,
              format: (val) => `${val}`,
              sortable: true
            },
            {
              name: 'high_severity_count',
              required: true,
              label: 'Nb. High Severity Alarms',
              align: 'left',
              field: (row) => row.high_severity_count,
              format: (val) => `${val}`,
              sortable: true
            },
            {
              name: 'medium_severity_count',
              required: true,
              label: 'Nb. Medium Severity Alarms',
              align: 'left',
              field: (row) => row.medium_severity_count,
              format: (val) => `${val}`,
              sortable: true
            },
            {
              name: 'low_severity_count',
              required: true,
              label: 'Nb. Low Severity Alarms',
              align: 'left',
              field: (row) => row.low_severity_count,
              format: (val) => `${val}`,
              sortable: true
            },
            {
              name: 'deviation_median',
              required: true,
              label: 'Median Deviation',
              align: 'left',
              field: (row) => row.deviation_median,
              format: (val) => `${val}`,
              sortable: true
            },
            {
              name: 'deviation_avg',
              required: true,
              label: 'Average Deviation',
              align: 'left',
              field: (row) => row.deviation_avg,
              format: (val) => `${val}`,
              sortable: true
            }
          ]
        }
      },
      network_delay: {
        columns: {
          network_delay_startpoint: [],
          network_delay_startpoint_type: [],
          network_delay_startpoint_name: [],
          network_delay_startpoint_country: [],
          network_delay_startpoint_country_iso_code2: [],
          network_delay_startpoint_country_iso_code3: [],
          network_delay_startpoint_af: [],
          network_delay_endpoint: [],
          network_delay_endpoint_type: [],
          network_delay_endpoint_name: [],
          network_delay_endpoint_country: [],
          network_delay_endpoint_country_iso_code2: [],
          network_delay_endpoint_country_iso_code3: [],
          network_delay_endpoint_af: [],
          network_delay_count: [],
          network_delay_timebin: [],
          network_delay_severity: [],
          network_delay_deviation: []
        },
        metadata: {
          title: 'Network Delay',
          table_button_text: 'Network Delay Alarms',
          description: 'Network delay changes observed in traceroute data.',
          default_key: 'startpoint',
          group_by_key_options: { source: 'startpoint', destination: 'endpoint' },
          is_default_selected: false,
          table_columns: [
            { name: 'overview', label: 'Overview', align: 'center' },
            { name: 'asn_overview', label: 'Round Trip Time Overview', align: 'center' },
            {
              name: 'startpoint',
              required: true,
              label: 'Source',
              align: 'left',
              field: (row) => row.startpoint,
              format: (val) => `${val}`,
              sortable: true
            },
            {
              name: 'startpoint_name',
              required: true,
              label: 'Source Name',
              align: 'left',
              field: (row) => row.startpoint_name,
              format: (val) => `${val}`,
              sortable: false
            },
            {
              name: 'startpoint_af',
              required: true,
              label: 'Source IP Address Family',
              align: 'left',
              field: (row) => row.startpoint_af,
              format: (val) => `${val}`,
              sortable: true
            },
            {
              name: 'startpoint_country',
              required: true,
              label: 'Source Country',
              align: 'left',
              field: (row) => row.startpoint_country,
              format: (val) => `${val}`,
              sortable: true
            },
            {
              name: 'startpoint_country_iso_code3',
              required: true,
              label: 'Source Country Code',
              align: 'left',
              field: (row) => row.startpoint_country_iso_code3,
              format: (val) => `${val}`,
              sortable: true
            },
            {
              name: 'endpoint',
              required: true,
              label: 'Destination',
              align: 'left',
              field: (row) => row.endpoint,
              format: (val) => `${val}`,
              sortable: true
            },
            {
              name: 'endpoint_name',
              required: true,
              label: 'Destination Name',
              align: 'left',
              field: (row) => row.endpoint_name,
              format: (val) => `${val}`,
              sortable: false
            },
            {
              name: 'endpoint_af',
              required: true,
              label: 'Destination IP Address Family',
              align: 'left',
              field: (row) => row.endpoint_af,
              format: (val) => `${val}`,
              sortable: true
            },
            {
              name: 'endpoint_country',
              required: true,
              label: 'Destination Country',
              align: 'left',
              field: (row) => row.endpoint_country,
              format: (val) => `${val}`,
              sortable: false
            },
            {
              name: 'endpoint_country_iso_code3',
              required: true,
              label: 'Destination Country Code',
              align: 'left',
              field: (row) => row.endpoint_country_iso_code3,
              format: (val) => `${val}`,
              sortable: true
            }
          ],
          table_aggregated_columns: [
            {
              name: 'total_count',
              required: true,
              label: 'Nb. Alarms',
              align: 'left',
              field: (row) => row.total_count,
              format: (val) => `${val}`,
              sortable: true
            },
            {
              name: 'high_severity_count',
              required: true,
              label: 'Nb. High Severity Alarms',
              align: 'left',
              field: (row) => row.high_severity_count,
              format: (val) => `${val}`,
              sortable: true
            },
            {
              name: 'medium_severity_count',
              required: true,
              label: 'Nb. Medium Severity Alarms',
              align: 'left',
              field: (row) => row.medium_severity_count,
              format: (val) => `${val}`,
              sortable: true
            },
            {
              name: 'low_severity_count',
              required: true,
              label: 'Nb. Low Severity Alarms',
              align: 'left',
              field: (row) => row.low_severity_count,
              format: (val) => `${val}`,
              sortable: true
            },
            {
              name: 'deviation_median',
              required: true,
              label: 'Median Deviation',
              align: 'left',
              field: (row) => row.deviation_median,
              format: (val) => `${val}`,
              sortable: true
            },
            {
              name: 'deviation_avg',
              required: true,
              label: 'Average Deviation',
              align: 'left',
              field: (row) => row.deviation_avg,
              format: (val) => `${val}`,
              sortable: true
            }
          ]
        }
      },
      network_disconnection: {
        columns: {
          network_disconnection_stream: [],
          network_disconnection_stream_type: [],
          network_disconnection_stream_name: [],
          network_disconnection_stream_country: [],
          network_disconnection_stream_country_iso_code2: [],
          network_disconnection_stream_country_iso_code3: [],
          network_disconnection_stream_af: [],
          network_disconnection_stream_disconnected_prefix: [],
          network_disconnection_stream_prob_id: [],
          network_disconnection_stream_total_probes: [],
          network_disconnection_start_timebin: [],
          network_disconnection_end_timebin: [],
          network_disconnection_timebin: [],
          network_disconnection_stream_id: [],
          network_disconnection_severity: [],
          network_disconnection_deviation: [],
          network_disconnection_duration: [],
          network_disconnection_count: []
        },
        metadata: {
          title: 'Network Disconnection',
          table_button_text: 'Network Disconnection Alarms',
          description:
            'Synchronous disconnection of multiple RIPE Atlas probes in the same region.',
          default_key: 'stream',
          group_by_key_options: { location: 'stream' },
          is_default_selected: false,
          table_columns: [
            { name: 'asn_overview', label: 'Latency Overview', align: 'center' },
            {
              name: 'stream',
              required: true,
              label: 'AS',
              align: 'left',
              field: (row) => row.stream,
              format: (val) => `${val}`,
              sortable: true
            },
            {
              name: 'stream_name',
              required: true,
              label: 'AS Name',
              align: 'left',
              field: (row) => row.stream_name,
              format: (val) => `${val}`,
              sortable: false
            },
            {
              name: 'stream_af',
              required: true,
              label: 'AS IP Address Family',
              align: 'left',
              field: (row) => row.stream_af,
              format: (val) => `${val}`,
              sortable: true
            },
            {
              name: 'stream_country',
              required: true,
              label: 'Country',
              align: 'left',
              field: (row) => row.stream_country,
              format: (val) => `${val}`,
              sortable: true
            },
            {
              name: 'stream_country_iso_code3',
              required: true,
              label: 'Country Code',
              align: 'left',
              field: (row) => row.stream_country_iso_code3,
              format: (val) => `${val}`,
              sortable: true
            },
            {
              name: 'stream_id',
              required: true,
              label: 'Stream ID',
              align: 'left',
              field: (row) => row.stream_id,
              format: (val) => `${val}`,
              sortable: false
            },
            {
              name: 'stream_disconnected_prefix',
              required: true,
              label: 'Disconnected Probe Prefix',
              align: 'left',
              field: (row) => row.stream_disconnected_prefix,
              format: (val) => `${val}`,
              sortable: true
            },
            {
              name: 'stream_prob_id',
              required: true,
              label: 'Disconnected Probe',
              align: 'left',
              field: (row) => row.stream_prob_id,
              format: (val) => `${val}`,
              sortable: false
            },
            {
              name: 'stream_total_probes',
              required: true,
              label: 'Nb. Total Probes',
              align: 'left',
              field: (row) => row.stream_total_probes,
              format: (val) => `${val}`,
              sortable: true
            }
          ],
          table_aggregated_columns: [
            {
              name: 'stream_disconnected_probe_percentage',
              required: false,
              label: 'Disconnected Probe %',
              align: 'left',
              field: (row) => row.stream_disconnected_probe_percentage,
              format: (val) => `${val}`,
              sortable: true
            },
            {
              name: 'total_count',
              required: true,
              label: 'Nb. Alarms',
              align: 'left',
              field: (row) => row.total_count,
              format: (val) => `${val}`,
              sortable: true
            },
            {
              name: 'high_severity_count',
              required: true,
              label: 'Nb. High Severity Alarms',
              align: 'left',
              field: (row) => row.high_severity_count,
              format: (val) => `${val}`,
              sortable: true
            },
            {
              name: 'medium_severity_count',
              required: true,
              label: 'Nb. Medium Severity Alarms',
              align: 'left',
              field: (row) => row.medium_severity_count,
              format: (val) => `${val}`,
              sortable: true
            },
            {
              name: 'low_severity_count',
              required: true,
              label: 'Nb. Low Severity Alarms',
              align: 'left',
              field: (row) => row.low_severity_count,
              format: (val) => `${val}`,
              sortable: true
            },
            {
              name: 'deviation_median',
              required: true,
              label: 'Median Deviation',
              align: 'left',
              field: (row) => row.deviation_avg,
              format: (val) => `${val}`,
              sortable: true
            },
            {
              name: 'deviation_avg',
              required: true,
              label: 'Average Deviation',
              align: 'left',
              field: (row) => row.deviation_avg,
              format: (val) => `${val}`,
              sortable: true
            },
            {
              name: 'duration_median',
              required: true,
              label: 'Median Duration (minutes)',
              align: 'left',
              field: (row) => row.duration_median,
              format: (val) => `${val}`,
              sortable: true
            },
            {
              name: 'duration_avg',
              required: true,
              label: 'Average Duration (minutes)',
              align: 'left',
              field: (row) => row.duration_avg,
              format: (val) => `${val}`,
              sortable: true
            }
          ]
        }
      }
    },
    metadata: {
      title: 'IHR',
      description: 'Alarms reported by IHR.'
    }
  },
  grip: {
    alarm_types: {
      moas: {
        columns: {
          moas_asn_attacker: [],
          moas_asn_attacker_name: [],
          moas_asn_attacker_country: [],
          moas_asn_attacker_country_iso_code2: [],
          moas_asn_attacker_country_iso_code3: [],
          moas_asn_attacker_af: [],
          moas_asn_attacker_newcomer: [],
          moas_asn_attacker_attacking_prefix: [],
          moas_asn_attacker_trustworthy: [],
          moas_asn_attacker_trustworthy_tag: [],
          moas_asn_victim: [],
          moas_asn_victim_name: [],
          moas_asn_victim_country: [],
          moas_asn_victim_country_iso_code2: [],
          moas_asn_victim_country_iso_code3: [],
          moas_asn_victim_newcomer: [],
          moas_asn_victim_trustworthy: [],
          moas_asn_victim_trustworthy_tag: [],
          moas_asn_victim_af: [],
          moas_timebin: [],
          moas_count: [],
          moas_severity: [],
          moas_deviation: [],
          moas_duration: []
        },
        metadata: {
          title: 'MOAS',
          table_button_text: 'MOAS Alarms',
          description: 'Multi Origin-AS. Prefixes concurently announced in BGP by multiple ASes.',
          default_key: 'asn_attacker',
          group_by_key_options: { attacker: 'asn_attacker', victim: 'asn_victim' },
          is_default_selected: false,
          table_columns: gripColumns.table_columns,
          table_aggregated_columns: gripColumns.table_aggregated_columns
        }
      },
      submoas: {
        columns: {
          submoas_asn_attacker: [],
          submoas_asn_attacker_name: [],
          submoas_asn_attacker_country: [],
          submoas_asn_attacker_country_iso_code2: [],
          submoas_asn_attacker_country_iso_code3: [],
          submoas_asn_attacker_af: [],
          submoas_asn_attacker_newcomer: [],
          submoas_asn_attacker_attacking_prefix: [],
          submoas_asn_attacker_trustworthy: [],
          submoas_asn_attacker_trustworthy_tag: [],
          submoas_asn_victim: [],
          submoas_asn_victim_name: [],
          submoas_asn_victim_country: [],
          submoas_asn_victim_country_iso_code2: [],
          submoas_asn_victim_country_iso_code3: [],
          submoas_asn_victim_newcomer: [],
          submoas_asn_victim_trustworthy: [],
          submoas_asn_victim_trustworthy_tag: [],
          submoas_asn_victim_af: [],
          submoas_timebin: [],
          submoas_count: [],
          submoas_severity: [],
          submoas_deviation: [],
          submoas_duration: []
        },
        metadata: {
          title: 'Sub-MOAS',
          table_button_text: 'Sub-MOAS Alarms',
          description: 'Sub-prefix MOAS. Sup-prefix announced by a different origin AS.',
          default_key: 'asn_attacker',
          group_by_key_options: { attacker: 'asn_attacker', victim: 'asn_victim' },
          is_default_selected: false,
          table_columns: gripColumns.table_columns,
          table_aggregated_columns: gripColumns.table_aggregated_columns
        }
      },
      defcon: {
        columns: {
          defcon_asn_attacker: [],
          defcon_asn_attacker_name: [],
          defcon_asn_attacker_country: [],
          defcon_asn_attacker_country_iso_code2: [],
          defcon_asn_attacker_country_iso_code3: [],
          defcon_asn_attacker_af: [],
          defcon_asn_attacker_newcomer: [],
          defcon_asn_attacker_attacking_prefix: [],
          defcon_asn_attacker_trustworthy: [],
          defcon_asn_attacker_trustworthy_tag: [],
          defcon_asn_victim: [],
          defcon_asn_victim_name: [],
          defcon_asn_victim_country: [],
          defcon_asn_victim_country_iso_code2: [],
          defcon_asn_victim_country_iso_code3: [],
          defcon_asn_victim_newcomer: [],
          defcon_asn_victim_trustworthy: [],
          defcon_asn_victim_trustworthy_tag: [],
          defcon_asn_victim_af: [],
          defcon_timebin: [],
          defcon_count: [],
          defcon_severity: [],
          defcon_deviation: [],
          defcon_duration: []
        },
        metadata: {
          title: 'DEFCON',
          table_button_text: 'DEFCON Alarms',
          description: 'Hijack using a more specific prefix on an existing AS path.',
          default_key: 'asn_attacker',
          group_by_key_options: { attacker: 'asn_attacker', victim: 'asn_victim' },
          is_default_selected: false,
          table_columns: gripColumns.table_columns,
          table_aggregated_columns: gripColumns.table_aggregated_columns
        }
      },
      edges: {
        columns: {
          edges_asn_attacker: [],
          edges_asn_attacker_name: [],
          edges_asn_attacker_country: [],
          edges_asn_attacker_country_iso_code2: [],
          edges_asn_attacker_country_iso_code3: [],
          edges_asn_attacker_af: [],
          edges_asn_attacker_newcomer: [],
          edges_asn_attacker_attacking_prefix: [],
          edges_asn_attacker_trustworthy: [],
          edges_asn_attacker_trustworthy_tag: [],
          edges_asn_victim: [],
          edges_asn_victim_name: [],
          edges_asn_victim_country: [],
          edges_asn_victim_country_iso_code2: [],
          edges_asn_victim_country_iso_code3: [],
          edges_asn_victim_newcomer: [],
          edges_asn_victim_trustworthy: [],
          edges_asn_victim_trustworthy_tag: [],
          edges_asn_victim_af: [],
          edges_timebin: [],
          edges_count: [],
          edges_severity: [],
          edges_deviation: [],
          edges_duration: []
        },
        metadata: {
          title: 'Fake Path',
          table_button_text: 'Fake Path Alarms',
          description: 'Hijack using forged AS paths to legitimate origin AS. (a.k.a. Edges)',
          default_key: 'asn_attacker',
          group_by_key_options: { attacker: 'asn_attacker', victim: 'asn_victim' },
          is_default_selected: false,
          table_columns: gripColumns.table_columns,
          table_aggregated_columns: gripColumns.table_aggregated_columns
        }
      }
    },
    metadata: {
      title: 'GRIP',
      description: "BGP hijacks reported by Georgia Tech's GRIP platform."
    }
  },
  ioda: {
    alarm_types: {
      ping_slash24: {
        columns: {
          ping_slash24_entity: [],
          ping_slash24_entity_type: [],
          ping_slash24_entity_name: [],
          ping_slash24_entity_country: [],
          ping_slash24_entity_country_iso_code2: [],
          ping_slash24_entity_country_iso_code3: [],
          ping_slash24_entity_af: [],
          ping_slash24_entity_ip_count: [],
          ping_slash24_entity_alarm_type: [],
          ping_slash24_condition: [],
          ping_slash24_value: [],
          ping_slash24_historical_value: [],
          ping_slash24_severity: [],
          ping_slash24_timebin: [],
          ping_slash24_count: []
        },
        metadata: {
          title: 'Ping',
          table_button_text: 'Ping Alarms',
          description:
            'Data plane outages detected in ping data for /24 block (a.k.a. Active Probing).',
          default_key: 'entity',
          group_by_key_options: { asn: 'entity' },
          is_default_selected: false,
          ipAddressFamilies: { 4: true, 6: false },
          unit: 'Ping (Reachable Prefixes /24s)',
          table_columns: iodaColumns.table_columns,
          table_aggregated_columns: [
            {
              name: 'value_avg_percentage',
              required: true,
              label: 'AS Reachable Prefixes /24s % (Average)',
              align: 'left',
              field: (row) => row.value_avg_percentage,
              format: (val) => `${val}`,
              sortable: true
            },
            {
              name: 'historical_value_avg_percentage',
              required: true,
              label: 'AS Historical Reachable Prefixes /24s % (Average)',
              align: 'left',
              field: (row) => row.historical_value_avg_percentage,
              format: (val) => `${val}`,
              sortable: true
            },
            {
              name: 'value_median_percentage',
              required: true,
              label: 'AS Prefixes /24s % (Average Median)',
              align: 'left',
              field: (row) => row.value_median_percentage,
              format: (val) => `${val}`,
              sortable: true
            },
            {
              name: 'historical_value_median_percentage',
              required: true,
              label: 'AS Historical Reachable Prefixes /24s % (Average Median)',
              align: 'left',
              field: (row) => row.historical_value_median_percentage,
              format: (val) => `${val}`,
              sortable: true
            },
            {
              name: 'value_median',
              required: true,
              label: 'Nb. AS Reachable Prefixes /24s (Median)',
              align: 'left',
              field: (row) => row.value_median,
              format: (val) => AggregatedAlarmsUtils.roundToDecimalPlaces(val, 0),
              sortable: true
            },
            {
              name: 'historical_value_median',
              required: true,
              label: 'Nb. AS Historical Reachable Prefixes /24s (Median)',
              align: 'left',
              field: (row) => row.historical_value_median,
              format: (val) => AggregatedAlarmsUtils.roundToDecimalPlaces(val, 0),
              sortable: true
            },
            {
              name: 'value_avg',
              required: true,
              label: 'Nb. AS Reachable Prefixes /24s (Average Median)',
              align: 'left',
              field: (row) => AggregatedAlarmsUtils.roundToDecimalPlaces(row.value_avg, 0),
              format: (val) => AggregatedAlarmsUtils.roundToDecimalPlaces(val, 0),
              sortable: true
            },
            {
              name: 'historical_value_avg',
              required: true,
              label: 'Nb. AS Historical Reachable Prefixes /24s (Average Median)',
              align: 'left',
              field: (row) =>
                AggregatedAlarmsUtils.roundToDecimalPlaces(row.historical_value_avg, 0),
              format: (val) => AggregatedAlarmsUtils.roundToDecimalPlaces(val, 0),
              sortable: true
            },
            {
              name: 'total_count',
              required: true,
              label: 'Nb. Alarms',
              align: 'left',
              field: (row) => row.total_count,
              format: (val) => `${val}`,
              sortable: true
            },
            {
              name: 'high_severity_count',
              required: true,
              label: 'Nb. High Severity Alarms',
              align: 'left',
              field: (row) => row.high_severity_count,
              format: (val) => `${val}`,
              sortable: true
            },
            {
              name: 'medium_severity_count',
              required: true,
              label: 'Nb. Medium Severity Alarms',
              align: 'left',
              field: (row) => row.medium_severity_count,
              format: (val) => `${val}`,
              sortable: true
            },
            {
              name: 'low_severity_count',
              required: true,
              label: 'Nb. Low Severity Alarms',
              align: 'left',
              field: (row) => row.low_severity_count,
              format: (val) => `${val}`,
              sortable: true
            }
          ]
        }
      },
      bgp: {
        columns: {
          bgp_entity: [],
          bgp_entity_type: [],
          bgp_entity_name: [],
          bgp_entity_country: [],
          bgp_entity_country_iso_code2: [],
          bgp_entity_country_iso_code3: [],
          bgp_entity_af: [],
          bgp_entity_ip_count: [],
          bgp_entity_alarm_type: [],
          bgp_condition: [],
          bgp_value: [],
          bgp_historical_value: [],
          bgp_severity: [],
          bgp_timebin: [],
          bgp_count: []
        },
        metadata: {
          title: 'BGP',
          table_button_text: 'BGP Alarms',
          description: 'Routing outages detected in BGP data.',
          default_key: 'entity',
          group_by_key_options: { asn: 'entity' },
          is_default_selected: false,
          ipAddressFamilies: { 4: true, 6: true },
          unit: 'BGP (Visible Prefixes /24s)',
          table_columns: iodaColumns.table_columns,
          table_aggregated_columns: [
            {
              name: 'value_avg_percentage',
              required: true,
              label: 'AS Visible Prefixes /24s % (Average)',
              align: 'left',
              field: (row) => row.value_avg_percentage,
              format: (val) => `${val}`,
              sortable: true
            },
            {
              name: 'historical_value_avg_percentage',
              required: true,
              label: 'AS Historical Visible Prefixes /24s % (Average)',
              align: 'left',
              field: (row) => row.historical_value_avg_percentage,
              format: (val) => `${val}`,
              sortable: true
            },
            {
              name: 'value_median_percentage',
              required: true,
              label: 'AS Visible Prefixes /24s % (Average Median)',
              align: 'left',
              field: (row) => row.value_median_percentage,
              format: (val) => `${val}`,
              sortable: true
            },
            {
              name: 'historical_value_median_percentage',
              required: true,
              label: 'AS Historical Visible Prefixes /24s % (Average Median)',
              align: 'left',
              field: (row) => row.historical_value_median_percentage,
              format: (val) => `${val}`,
              sortable: true
            },
            {
              name: 'value_median',
              required: true,
              label: 'Nb. AS Visible Prefixes /24s (Median)',
              align: 'left',
              field: (row) => row.value_median,
              format: (val) => AggregatedAlarmsUtils.roundToDecimalPlaces(val, 0),
              sortable: true
            },
            {
              name: 'historical_value_median',
              required: true,
              label: 'Nb. AS Historical Visible Prefixes /24s (Median)',
              align: 'left',
              field: (row) => row.historical_value_median,
              format: (val) => AggregatedAlarmsUtils.roundToDecimalPlaces(val, 0),
              sortable: true
            },
            {
              name: 'value_avg',
              required: true,
              label: 'Nb. AS Visible Prefixes /24s (Average Median)',
              align: 'left',
              field: (row) => AggregatedAlarmsUtils.roundToDecimalPlaces(row.value_avg, 0),
              format: (val) => AggregatedAlarmsUtils.roundToDecimalPlaces(val, 0),
              sortable: true
            },
            {
              name: 'historical_value_avg',
              required: true,
              label: 'Nb. AS Historical Visible Prefixes /24s (Average Median)',
              align: 'left',
              field: (row) =>
                AggregatedAlarmsUtils.roundToDecimalPlaces(row.historical_value_avg, 0),
              format: (val) => AggregatedAlarmsUtils.roundToDecimalPlaces(val, 0),
              sortable: true
            },
            {
              name: 'total_count',
              required: true,
              label: 'Nb. Alarms',
              align: 'left',
              field: (row) => row.total_count,
              format: (val) => `${val}`,
              sortable: true
            },
            {
              name: 'high_severity_count',
              required: true,
              label: 'Nb. High Severity Alarms',
              align: 'left',
              field: (row) => row.high_severity_count,
              format: (val) => `${val}`,
              sortable: true
            },
            {
              name: 'medium_severity_count',
              required: true,
              label: 'Nb. Medium Severity Alarms',
              align: 'left',
              field: (row) => row.medium_severity_count,
              format: (val) => `${val}`,
              sortable: true
            },
            {
              name: 'low_severity_count',
              required: true,
              label: 'Nb. Low Severity Alarms',
              align: 'left',
              field: (row) => row.low_severity_count,
              format: (val) => `${val}`,
              sortable: true
            }
          ]
        }
      },
      ucsd_nt: {
        columns: {
          ucsd_nt_entity: [],
          ucsd_nt_entity_type: [],
          ucsd_nt_entity_name: [],
          ucsd_nt_entity_country: [],
          ucsd_nt_entity_country_iso_code2: [],
          ucsd_nt_entity_country_iso_code3: [],
          ucsd_nt_entity_af: [],
          ucsd_nt_entity_ip_count: [],
          ucsd_nt_entity_alarm_type: [],
          ucsd_nt_condition: [],
          ucsd_nt_value: [],
          ucsd_nt_historical_value: [],
          ucsd_nt_severity: [],
          ucsd_nt_timebin: [],
          ucsd_nt_count: []
        },
        metadata: {
          title: 'UCSD Telescope',
          table_button_text: 'UCSD Telescope Alarms',
          description: 'Outages detected with the UCSD network telescope.',
          default_key: 'entity',
          group_by_key_options: { asn: 'entity' },
          is_default_selected: false,
          ipAddressFamilies: { 4: true, 6: false },
          unit: 'UCSD Telescope (Unique Source IPs)',
          table_columns: iodaColumns.table_columns,
          table_aggregated_columns: [
            {
              name: 'value_avg_percentage',
              required: true,
              label: 'AS Unique Source IPs % (Average)',
              align: 'left',
              field: (row) => row.value_avg_percentage,
              format: (val) => `${val}`,
              sortable: true
            },
            {
              name: 'historical_value_avg_percentage',
              required: true,
              label: 'AS Historical Unique Source IPs % (Average)',
              align: 'left',
              field: (row) => row.historical_value_avg_percentage,
              format: (val) => `${val}`,
              sortable: true
            },
            {
              name: 'value_median_percentage',
              required: true,
              label: 'AS Unique Source IPs % (Average Median)',
              align: 'left',
              field: (row) => row.value_median_percentage,
              format: (val) => `${val}`,
              sortable: true
            },
            {
              name: 'historical_value_median_percentage',
              required: true,
              label: 'AS Historical Unique Source IPs % (Average Median)',
              align: 'left',
              field: (row) => row.historical_value_median_percentage,
              format: (val) => `${val}`,
              sortable: true
            },
            {
              name: 'value_median',
              required: true,
              label: 'Nb. AS Unique Source IPs (Median)',
              align: 'left',
              field: (row) => row.value_median,
              format: (val) => AggregatedAlarmsUtils.roundToDecimalPlaces(val, 0),
              sortable: true
            },
            {
              name: 'historical_value_median',
              required: true,
              label: 'Nb. AS Historical Unique Source IPs (Median)',
              align: 'left',
              field: (row) => row.historical_value_median,
              format: (val) => AggregatedAlarmsUtils.roundToDecimalPlaces(val, 0),
              sortable: true
            },
            {
              name: 'value_avg',
              required: true,
              label: 'Nb. AS Unique Source IPs (Average Median)',
              align: 'left',
              field: (row) => AggregatedAlarmsUtils.roundToDecimalPlaces(row.value_avg, 0),
              format: (val) => AggregatedAlarmsUtils.roundToDecimalPlaces(val, 0),
              sortable: true
            },
            {
              name: 'historical_value_avg',
              required: true,
              label: 'Nb. AS Historical Unique Source IPs (Average Median)',
              align: 'left',
              field: (row) =>
                AggregatedAlarmsUtils.roundToDecimalPlaces(row.historical_value_avg, 0),
              format: (val) => AggregatedAlarmsUtils.roundToDecimalPlaces(val, 0),
              sortable: true
            },
            {
              name: 'total_count',
              required: true,
              label: 'Nb. Alarms',
              align: 'left',
              field: (row) => row.total_count,
              format: (val) => `${val}`,
              sortable: true
            },
            {
              name: 'high_severity_count',
              required: true,
              label: 'Nb. High Severity Alarms',
              align: 'left',
              field: (row) => row.high_severity_count,
              format: (val) => `${val}`,
              sortable: true
            },
            {
              name: 'medium_severity_count',
              required: true,
              label: 'Nb. Medium Severity Alarms',
              align: 'left',
              field: (row) => row.medium_severity_count,
              format: (val) => `${val}`,
              sortable: true
            },
            {
              name: 'low_severity_count',
              required: true,
              label: 'Nb. Low Severity Alarms',
              align: 'left',
              field: (row) => row.low_severity_count,
              format: (val) => `${val}`,
              sortable: true
            }
          ]
        }
      },
      merit_nt: {
        columns: {
          merit_nt_entity: [],
          merit_nt_entity_type: [],
          merit_nt_entity_name: [],
          merit_nt_entity_country: [],
          merit_nt_entity_country_iso_code2: [],
          merit_nt_entity_country_iso_code3: [],
          merit_nt_entity_af: [],
          merit_nt_entity_ip_count: [],
          merit_nt_entity_alarm_type: [],
          merit_nt_condition: [],
          merit_nt_value: [],
          merit_nt_historical_value: [],
          merit_nt_severity: [],
          merit_nt_timebin: [],
          merit_nt_count: []
        },
        metadata: {
          title: 'Merit Telescope',
          table_button_text: 'Merit Telescope Alarms',
          description: 'Outages detected with the Merit network telescope.',
          default_key: 'entity',
          group_by_key_options: { asn: 'entity' },
          is_default_selected: false,
          ipAddressFamilies: { 4: true, 6: false },
          unit: 'Merit Telescope (Unique Source IPs)',
          table_columns: iodaColumns.table_columns,
          table_aggregated_columns: [
            {
              name: 'value_avg_percentage',
              required: true,
              label: 'AS Unique Source IPs % (Average)',
              align: 'left',
              field: (row) => row.value_avg_percentage,
              format: (val) => `${val}`,
              sortable: true
            },
            {
              name: 'historical_value_avg_percentage',
              required: true,
              label: 'AS Historical Unique Source IPs % (Average)',
              align: 'left',
              field: (row) => row.historical_value_avg_percentage,
              format: (val) => `${val}`,
              sortable: true
            },
            {
              name: 'value_median_percentage',
              required: true,
              label: 'AS Unique Source IPs % (Average Median)',
              align: 'left',
              field: (row) => row.value_median_percentage,
              format: (val) => `${val}`,
              sortable: true
            },
            {
              name: 'historical_value_median_percentage',
              required: true,
              label: 'AS Historical Unique Source IPs % (Average Median)',
              align: 'left',
              field: (row) => row.historical_value_median_percentage,
              format: (val) => `${val}`,
              sortable: true
            },
            {
              name: 'value_median',
              required: true,
              label: 'Nb. AS Unique Source IPs (Median)',
              align: 'left',
              field: (row) => row.value_median,
              format: (val) => AggregatedAlarmsUtils.roundToDecimalPlaces(val, 0),
              sortable: true
            },
            {
              name: 'historical_value_median',
              required: true,
              label: 'Nb. AS Historical Unique Source IPs (Median)',
              align: 'left',
              field: (row) => row.historical_value_median,
              format: (val) => AggregatedAlarmsUtils.roundToDecimalPlaces(val, 0),
              sortable: true
            },
            {
              name: 'value_avg',
              required: true,
              label: 'Nb. AS Unique Source IPs (Average Median)',
              align: 'left',
              field: (row) => AggregatedAlarmsUtils.roundToDecimalPlaces(row.value_avg, 0),
              format: (val) => AggregatedAlarmsUtils.roundToDecimalPlaces(val, 0),
              sortable: true
            },
            {
              name: 'historical_value_avg',
              required: true,
              label: 'Nb. AS Historical Unique Source IPs (Average Median)',
              align: 'left',
              field: (row) =>
                AggregatedAlarmsUtils.roundToDecimalPlaces(row.historical_value_avg, 0),
              format: (val) => AggregatedAlarmsUtils.roundToDecimalPlaces(val, 0),
              sortable: true
            },
            {
              name: 'total_count',
              required: true,
              label: 'Nb. Alarms',
              align: 'left',
              field: (row) => row.total_count,
              format: (val) => `${val}`,
              sortable: true
            },
            {
              name: 'high_severity_count',
              required: true,
              label: 'Nb. High Severity Alarms',
              align: 'left',
              field: (row) => row.high_severity_count,
              format: (val) => `${val}`,
              sortable: true
            },
            {
              name: 'medium_severity_count',
              required: true,
              label: 'Nb. Medium Severity Alarms',
              align: 'left',
              field: (row) => row.medium_severity_count,
              format: (val) => `${val}`,
              sortable: true
            },
            {
              name: 'low_severity_count',
              required: true,
              label: 'Nb. Low Severity Alarms',
              align: 'left',
              field: (row) => row.low_severity_count,
              format: (val) => `${val}`,
              sortable: true
            }
          ]
        }
      }
    },
    metadata: {
      title: 'IODA',
      description: "Internet outages reported by Georgia Tech's IODA platform"
    }
  }
}
