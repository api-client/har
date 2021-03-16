import { css } from 'lit-element';

export default css `
:host {
  display: block;
  --anypoint-item-icon-width: auto;
}

.status-code {
  color: var(--response-status-code-color, #fff);
  background-color: var(--arc-status-code-color-200, rgb(36, 107, 39));
  padding: 2px 12px;
  border-radius: 12px;
  margin-right: 4px;
}

.status-code.error {
  background-color: var(--arc-status-code-color-500, rgb(211, 47, 47));
}

.status-code.warning {
  background-color: var(--arc-status-code-color-400, rgb(171, 86, 0));
}

.status-code.info {
  background-color: var(--arc-status-code-color-300, rgb(48, 63, 159));
}

.loading-time-label {
  display: block;
  margin-left: auto;
  margin-right: 12px;
}

.response-size-label {
  display: block;
}

.entry-detail-line {
  display: flex;
  align-items: center;
}

.entry-location {
  margin-top: 6px;
  font-size: 1.1rem;
}

.entry-timings {
  margin-left: 32px;
  width: calc(40% - 32px);
  display: flex;
}

.time {
  margin-right: 32px;
}

.entry-timings-value {
  display: flex;
  height: 20px;
}

.timing-entry {
  height: 100%;
  background-color: transparent;
}

.timing-entry.blocked {
  background-color: #b4b4b4;
}

.timing-entry.dns {
  background-color: #f6f696;
}

.timing-entry.connect {
  background-color: #ffc04c;
}

.timing-entry.ssl {
  background-color: #8787ff;
}

.timing-entry.send {
  background-color: #ff7f7f;
}

.timing-entry.wait {
  background-color: #2eac6c;
}

.timing-entry.receive {
  background-color: #00c0ff;
}

.entry-item {
  border-top: 1px rgba(0, 0, 0, 0.12) solid;
  padding: 0 8px;
}

.entry-item:last-of-type {
  border-bottom: 1px rgba(0, 0, 0, 0.12) solid;
}

.entry-body {
  min-height: 72px;
}

.page-header {
  display: flex;
  height: 56px;
  font-weight: 500;
}

.entry-details {
  margin-bottom: 40px;
}

.entry-details-title {
  font-size: 1.2rem;
  margin: 0.67em 0;
}

.body-preview {
  white-space: break-spaces;
  word-break: break-word;
}

.details-list dt {
  font-size: 1.1rem;
  font-weight: 500;
}

.details-list dfn {
  font-weight: 700;
}

.details-content {
  padding: 0 8px;
}

anypoint-listbox {
  background-color: transparent;
}
`;
